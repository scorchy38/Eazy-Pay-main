import dotenv from 'dotenv';
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  /**
   * Port the app should run on
   */
  port: parseInt(process.env.PORT) || 5050,

  /**
   * Database the app should connect to
   */
  databaseURL: 'mongodb+srv://shubhsaras:shubhsaras@cluster0.jgs8e.mongodb.net/Cluster0?retryWrites=true&w=majority',

  /**
   * The secret sauce to validate JWT
   */
  jwtSecret: '8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb',

  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * Twilio SID
   */
  sid: 'AC0b3ace4496e42bec9793eb59d143176c',

  /**
   * Twilio Auth
   */
  authToken: '83f06ecd904631266c16512f201d8e3f',

  /**
   * Twilio Phone Number
   */
  phoneNumber: '+15078795262',

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
