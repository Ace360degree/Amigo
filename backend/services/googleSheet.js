/**
 * Helper module to sync form submission data with Google Sheets via Google Apps Script Web App Webhook.
 */

async function sendToGoogleSheet(formType, data) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('GOOGLE_SHEET_WEBHOOK_URL is not set in environment variables. Skipping Google Sheet sync.');
    return;
  }

  try {
    const payload = {
      formType: formType,
      timestamp: new Date().toISOString(),
      data: data
    };

    // Use native fetch (Node 18+) or dynamic fetch
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    if (!response.ok) {
      console.error(`Google Sheet Webhook returned HTTP status ${response.status}`);
    } else {
      console.log(`Successfully synced ${formType} submission to Google Sheet`);
    }
  } catch (error) {
    console.error(`Failed to sync ${formType} submission to Google Sheet:`, error.message);
  }
}

module.exports = {
  sendToGoogleSheet
};
