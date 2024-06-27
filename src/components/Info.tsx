import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import InformationCard from './InformationCard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
export default function Info() {
  return (
    <Box
      sx={{
        padding: '32px',
        backgroundColor: 'white',
        px: 7,
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <InformationCard
            title="Acil Bakım"
            description="Acil Bakım hizmetimiz sizin güvenilir desteğiniz olacak şekilde tasarlanmıştır
              kritik durumlarda. Ani bir hastalık, yaralanma veya
              acil müdahale gerektiren herhangi bir tıbbi endişe, ekibimiz
              özel sağlık profesyonelleri 7/24 hizmetinizdedir
              hızlı ve verimli bakım."
            icon={<LocalHospitalIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InformationCard
            title="Kalp Hastalığı"
            description="Deneyimli kardiyolog ve tıp uzmanlarından oluşan ekibimiz şunları kullanır
              kardiyovasküler sağlığınızı değerlendirmek için en son teknoloji ve
              kişiye özel tedavi planları tasarlayın. Kapsamlı gösterimlerden
              gelişmiş müdahalelere, sürdürmenize yardımcı olmayı taahhüt ediyoruz
              sağlıklı bir kalp ve tatmin edici bir yaşam sürün."
            icon={<HeartBrokenIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InformationCard
            title="Diş Bakımı"
            description="Diş Bakımı hizmetlerimiz tüm ihtiyaçlarınızı karşılarken güvenle gülümseyin.
              ağız sağlığı ihtiyaçları. Uzman diş hekimlerimiz geniş bir yelpazede
              rutin kontroller ve temizliklerden kozmetiklere kadar tedaviler
              prosedürler ve restoratif tedaviler."
            icon={<LocalHospitalIcon />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
