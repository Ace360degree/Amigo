/**
 * Google Apps Script for Amigo Academy Form Submissions
 * Spreadsheet URL: https://docs.google.com/spreadsheets/d/10IqSMKulwL0jo_xSRLd3HSE1SQNVKeiXzS5MlUoyCWA/edit
 *
 * Instructions:
 * 1. Open your Google Spreadsheet: https://docs.google.com/spreadsheets/d/10IqSMKulwL0jo_xSRLd3HSE1SQNVKeiXzS5MlUoyCWA/edit
 * 2. Click Extensions > Apps Script in the menu bar.
 * 3. Replace all existing code in Code.gs with this entire file.
 * 4. Click 'Deploy' > 'New deployment'.
 * 5. Select type: 'Web app'.
 * 6. Set Description: "Form Sync Webhook".
 * 7. Set Execute as: "Me".
 * 8. Set Who has access: "Anyone" (Critical step!).
 * 9. Click 'Deploy' and copy the Web App URL (starts with https://script.google.com/macros/s/...).
 * 10. Paste the Web App URL into your backend `.env` file under `GOOGLE_SHEET_WEBHOOK_URL`.
 */

function doPost(e) {
  try {
    const contents = JSON.parse(e.postData.contents);
    const formType = contents.formType || 'General';
    const timestamp = contents.timestamp || new Date().toISOString();
    const data = contents.data || {};

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Get or create sheet tab for formType
    let sheet = ss.getSheetByName(formType);
    if (!sheet) {
      sheet = ss.insertSheet(formType);
    }

    // Set headers if new sheet or empty
    if (sheet.getLastRow() === 0) {
      const headers = ['Timestamp', 'DB ID', ...Object.keys(data).filter(k => k !== 'id')];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#EFEFEF');
    }

    // Build row values matching header standard
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const newRow = headers.map(header => {
      if (header === 'Timestamp') return timestamp;
      if (header === 'DB ID') return data.id || '';
      return data[header] !== undefined ? data[header] : '';
    });

    // Append row
    sheet.appendRow(newRow);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
