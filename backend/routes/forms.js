const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const db = require('../config/database');

const { sendToGoogleSheet } = require('../services/googleSheet');
// Helper to extract client IP address accurately
const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || req.ip || null;
};

// ==========================================
// 1. POST /api/contact
// Inserts into `contact_enquiries`
// ==========================================
router.post(
  '/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('phone').trim().notEmpty().withMessage('Phone number is required').matches(/^[0-9+\-\s()]{7,15}$/).withMessage('Invalid phone number'),
    body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email address'),
    body('website_url').custom((value) => {
      if (value) throw new Error('Bot submission detected');
      return true;
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      enquiry_type,
      name,
      phone,
      email,
      city,
      preferred_location,
      business_experience,
      investment_range,
      message
    } = req.body;

    const ip_address = getClientIp(req);

    try {
      const sql = `
        INSERT INTO contact_enquiries
        (enquiry_type, name, phone, email, city, preferred_location, business_experience, investment_range, message, ip_address)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.execute(sql, [
        enquiry_type || 'General',
        name,
        phone,
        email || null,
        city || null,
        preferred_location || null,
        business_experience || null,
        investment_range || null,
        message || null,
        ip_address
      ]);

      sendToGoogleSheet('Contact', { id: result.insertId, enquiry_type, name, phone, email, city, preferred_location, business_experience, investment_range, message, ip_address });

      return res.status(201).json({
        status: 'success',
        message: 'Contact enquiry submitted successfully',
        data: { id: result.insertId }
      });
    } catch (err) {
      console.error('Database Error in /api/contact:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error while saving contact enquiry',
        error: err.message
      });
    }
  }
);

// ==========================================
// 2. POST /api/counsellor
// Inserts into `counsellor_enquiries`
// ==========================================
router.post(
  '/counsellor',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    body('phone').trim().notEmpty().withMessage('Phone number is required').matches(/^[0-9+\-\s()]{7,15}$/).withMessage('Invalid phone number'),
    // Honeypot bot protection check (should remain empty for real users)
    body('website_url').custom((value) => {
      if (value) {
        throw new Error('Bot submission detected');
      }
      return true;
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      name,
      phone,
      course,
      branch,
      age,
      gender,
      qualification,
      form_location
    } = req.body;

    const ip_address = getClientIp(req);

    try {
      const sql = `
        INSERT INTO counsellor_enquiries
        (name, phone, course, branch, age, gender, qualification, form_location, ip_address)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.execute(sql, [
        name,
        phone,
        course || null,
        branch || null,
        age || null,
        gender || null,
        qualification || null,
        form_location || 'Website Form',
        ip_address
      ]);

      sendToGoogleSheet('Counsellor', { id: result.insertId, name, phone, course, branch, age, gender, qualification, form_location, ip_address });

      return res.status(201).json({
        status: 'success',
        message: 'Counsellor enquiry submitted successfully',
        data: { id: result.insertId }
      });
    } catch (err) {
      console.error('Database Error in /api/counsellor:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error while saving counsellor enquiry',
        error: err.message
      });
    }
  }
);

// ==========================================
// 3. POST /api/eligibility
// Inserts into `eligibility_leads`
// ==========================================
router.post(
  '/eligibility',
  [
    body('full_name').trim().notEmpty().withMessage('Full name is required').isLength({ min: 2 }).withMessage('Full name must be at least 2 characters'),
    body('phone').trim().notEmpty().withMessage('Phone number is required').matches(/^[0-9+\-\s()]{7,15}$/).withMessage('Invalid phone number'),
    body('website_url').custom((value) => {
      if (value) throw new Error('Bot submission detected');
      return true;
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      full_name,
      phone,
      age,
      gender,
      course,
      qualification,
      branch,
      source_page
    } = req.body;

    const ip_address = getClientIp(req);

    try {
      const sql = `
        INSERT INTO eligibility_leads
        (full_name, phone, age, gender, course, qualification, branch, source_page, ip_address)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.execute(sql, [
        full_name,
        phone,
        age || null,
        gender || null,
        course || null,
        qualification || null,
        branch || null,
        source_page || 'Eligibility Modal',
        ip_address
      ]);

      sendToGoogleSheet('Eligibility', { id: result.insertId, full_name, phone, age, gender, course, qualification, branch, source_page, ip_address });

      return res.status(201).json({
        status: 'success',
        message: 'Eligibility lead submitted successfully',
        data: { id: result.insertId }
      });
    } catch (err) {
      console.error('Database Error in /api/eligibility:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error while saving eligibility lead',
        error: err.message
      });
    }
  }
);

// ==========================================
// 4. POST /api/seminar
// Inserts into `seminar_registrations`
// ==========================================
router.post(
  '/seminar',
  [
    body('first_name').trim().notEmpty().withMessage('First name is required').isLength({ min: 2 }).withMessage('First name must be at least 2 characters'),
    body('surname').trim().notEmpty().withMessage('Surname is required').isLength({ min: 1 }),
    body('whatsapp').trim().notEmpty().withMessage('WhatsApp number is required').matches(/^[0-9+\-\s()]{7,15}$/).withMessage('Invalid WhatsApp number'),
    body('website_url').custom((value) => {
      if (value) throw new Error('Bot submission detected');
      return true;
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      first_name,
      middle_name,
      surname,
      gender,
      height,
      weight,
      age,
      marital_status,
      whatsapp,
      mobile2,
      mobile3,
      father_name,
      father_occupation,
      father_mobile,
      mother_name,
      mother_occupation,
      mother_mobile,
      education_level,
      school_college,
      stream,
      year,
      medium,
      percentage,
      references_json
    } = req.body;

    const ip_address = getClientIp(req);
    const refString = typeof references_json === 'object' ? JSON.stringify(references_json) : (references_json || null);

    try {
      const sql = `
        INSERT INTO seminar_registrations
        (first_name, middle_name, surname, gender, height, weight, age, marital_status, whatsapp, mobile2, mobile3, father_name, father_occupation, father_mobile, mother_name, mother_occupation, mother_mobile, education_level, school_college, stream, year, medium, percentage, references_json, ip_address)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.execute(sql, [
        first_name,
        middle_name || null,
        surname,
        gender || null,
        height || null,
        weight || null,
        age || null,
        marital_status || null,
        whatsapp,
        mobile2 || null,
        mobile3 || null,
        father_name || null,
        father_occupation || null,
        father_mobile || null,
        mother_name || null,
        mother_occupation || null,
        mother_mobile || null,
        education_level || null,
        school_college || null,
        stream || null,
        year || null,
        medium || null,
        percentage || null,
        refString,
        ip_address
      ]);

      sendToGoogleSheet('Seminar', { id: result.insertId, first_name, middle_name, surname, gender, height, weight, age, marital_status, whatsapp, mobile2, mobile3, father_name, father_occupation, father_mobile, mother_name, mother_occupation, mother_mobile, education_level, school_college, stream, year, medium, percentage, references_json: refString, ip_address });

      return res.status(201).json({
        status: 'success',
        message: 'Seminar registration submitted successfully',
        data: { id: result.insertId }
      });
    } catch (err) {
      console.error('Database Error in /api/seminar:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error while saving seminar registration',
        error: err.message
      });
    }
  }
);

module.exports = router;
