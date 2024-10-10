import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rkpdgsdsuxqzesfryktf.supabase.co/rest/v1',
    headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrcGRnc2RzdXhxemVzZnJ5a3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0OTIyMTMsImV4cCI6MjA0NDA2ODIxM30.00b-h_9FRbanq0uimoNUGt5z0OoITdgDiqLaspV1lbE',
        authorization: 'Bearer sbp_f2c2bbeabecbf13626c012c97208d9f8e5ae3b9a',
    },
});