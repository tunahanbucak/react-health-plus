import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormHelperText,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormErrors {
  patientName?: string;
  patientNumber?: string;
  patientGender?: string;
  appointmentTime?: string;
  preferredMode?: string;
}

export default function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [patientName, setPatientName] = useState('');
  const [patientNumber, setPatientNumber] = useState('');
  const [patientGender, setPatientGender] = useState('default');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [preferredMode, setPreferredMode] = useState('default');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: FormErrors = {};

    // if (!patientName.trim()) {
    //   errors.patientName = 'Patient name is required';
    // } else if (patientName.trim().length < 8) {
    //   errors.patientName = 'Patient name must be at least 8 characters';
    // }

    if (!patientNumber.trim()) {
      errors.patientNumber = 'Patient phone number is required';
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = 'Telefon numarası 10 haneli olmalıdır';
    }

    if (patientGender === 'default') {
      errors.patientGender = 'Please select patient gender';
    }

    if (!appointmentTime) {
      errors.appointmentTime = 'Appointment time is required';
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = 'Please select a future appointment time';
      }
    }

    if (preferredMode === 'default') {
      errors.preferredMode = 'Please select preferred mode';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setPatientName('');
    setPatientNumber('');
    setPatientGender('default');
    setAppointmentTime('');
    setPreferredMode('default');
    setFormErrors({});

    toast.success('Randevu Oluşturuldu!', {
      position: 'bottom-left',
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 5,
      }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Online Randevu Alın
        </Typography>
        <TextField
          label="Hastanın  Adı Soyadı"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          // error={!!formErrors.patientName}
          // helperText={formErrors.patientName}
          required
        />
        <TextField
          label="Hasta Telefon Numarası"
          value={patientNumber}
          onChange={(e) => setPatientNumber(e.target.value)}
          error={!!formErrors.patientNumber}
          helperText={formErrors.patientNumber}
          required
        />
        <FormControl fullWidth error={!!formErrors.patientGender}>
          <InputLabel>Hasta Cinsiyeti</InputLabel>
          <Select
            value={patientGender}
            onChange={(e) => setPatientGender(e.target.value)}
            label="Hasta Cinsiyeti"
            required>
            <MenuItem value="male">Erkek</MenuItem>
            <MenuItem value="female">Kadın</MenuItem>
            <MenuItem value="private">
              Sadece doktoru bilgilendireceğim
            </MenuItem>
          </Select>
          <FormHelperText>{formErrors.patientGender}</FormHelperText>
        </FormControl>
        <TextField
          label="Tercih Edilen Randevu Saati"
          type="datetime-local"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
          error={!!formErrors.appointmentTime}
          helperText={formErrors.appointmentTime}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <FormControl fullWidth error={!!formErrors.preferredMode}>
          <InputLabel>Tercih Edilen Mod</InputLabel>
          <Select
            value={preferredMode}
            label="Tercih Edilen Mod"
            onChange={(e) => setPreferredMode(e.target.value)}
            required>
            <MenuItem value="voice">Sesli Arama</MenuItem>
            <MenuItem value="video">Görüntülü Görüşme</MenuItem>
          </Select>
          <FormHelperText>{formErrors.preferredMode}</FormHelperText>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" size="large">
          Randevuyu Onayla
        </Button>
        {isSubmitted && (
          <Typography variant="body1" color="success.main">
            Randevu bilgileri hastanın telefon numarasına SMS ile gönderilmiştir
          </Typography>
        )}
      </Box>
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 5 }}>
        © 2013-2024 Health+. All rights reserved.
      </Typography>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </Container>
  );
}
