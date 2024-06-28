import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import InformationCard from './InformationCard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { TbDental } from 'react-icons/tb';

export default function Info() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
      }}>
      <Box
        sx={{
          px: 7,
          pb: 20,
        }}
        id="services">
        <Box sx={{ margin: '64px 0 128px 0', textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '40px',
              fontWeight: 'bold',
            }}>
            <span style={{ position: 'relative' }}>
              Ne Yapıyoruz
              <Box
                component="span"
                sx={{
                  content: '""',
                  position: 'absolute',
                  width: '75%',
                  height: '4px',
                  backgroundColor: '#9D2553',
                  borderRadius: '8px',
                  left: 0,
                  bottom: '-12px',
                }}
              />
            </span>
          </Typography>
          <Typography
            sx={{
              margin: '64px',
              textAlign: 'center',
              color: 'rgb(77, 75, 75)',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '18px',
              letterSpacing: '.8px',
              lineHeight: '1.8rem',
            }}>
            Size kolaylık sağlamak için kapsamlı bir sağlık hizmeti sunuyoruz
            ihtiyaçlarınıza göre uyarlanmış isteğe bağlı tıbbi hizmetler
            yelpazesi. Bizim platform, deneyimli çevrimiçi doktorlarla bağlantı
            kurmanızı sağlar uzman tıbbi tavsiye sağlayın, çevrimiçi reçeteler
            verin ve teklif verin ihtiyacınız olduğunda hızlı yedekler.
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          sx={{
            gap: { xs: 8, md: 0 },
          }}>
          <Grid item xs={12} md={4}>
            <InformationCard
              title="Acil Bakım"
              description="Acil bakım hizmetimiz, kritik durumlarda güvenilir desteğiniz olacak şekilde tasarlanmıştır. Ani hastalık, yaralanma veya acil müdahale gerektiren her türlü tıbbi olayda, özel sağlık profesyonellerimiz 7/24 hizmetinizdedir.Sağlığınız bizim önceliğimizdir, her an yanınızdayız"
              icon={<LocalHospitalIcon />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InformationCard
              title="Kalp Hastalığı"
              description="Deneyimli kardiyologlar ve tıp uzmanlarından oluşan ekibimiz, sağlığınızı en son teknoloji ve kişiye özel tedavi planlarıyla değerlendirir. Kapsamlı muayenelerden ileri düzey müdahalelere kadar size sürdürülebilir sağlık sunmayı taahhüt ediyoruz. "
              icon={<HeartBrokenIcon />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InformationCard
              title="Diş Bakımı"
              description="Diş bakımı hizmetlerimiz, ağız sağlığı ihtiyaçlarınızı güvenle karşılamak için uzman diş hekimlerimiz tarafından sunulmaktadır. Rutin kontrollerden temizliklere, kozmetik işlemlerden restoratif tedavilere kadar geniş bir yelpazeyi kapsar. Güvenle gülümsemek için doğru adres!"
              icon={<TbDental />}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
