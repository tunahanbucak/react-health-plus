import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';

export default function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container>
      <Box
        sx={{
          textAlign: 'center',
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: 'white',
          borderRadius: 2,
          padding: '0 0 8px 0',
        }}>
        <Typography
          variant="h1"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: '#1A8EFD',
            fontSize: 48,
            letterSpacing: '0.8px',
            '& span': {
              color: '#54de54',
              fontFamily: 'Cambria, sans-serif',
              fontSize: 56,
              fontWeight: 'bold',
            },
          }}>
          Health <span>+</span>
        </Typography>
      </Box>
      <Box
        sx={{
          padding: '12px 32px',
          background: 'linear-gradient(to right, #ECF2FF, #FBFCFF)',
        }}>
        <Typography
          variant="h2"
          sx={{
            margin: '16px 0',
            paddingBottom: '2px',
            borderBottom: '2px solid grey',
            fontSize: 32,
            fontWeight: 'bold',
            letterSpacing: '0.8px',
          }}>
          Genel Bilgi
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '16px',
            fontFamily: 'Rubik, sans-serif',
            fontSize: 18,
            letterSpacing: '0.8px',
            lineHeight: '1.8rem',
          }}>
          Güvenilir çevrimiçi sağlık platformunuz Health Plus'a hoş geldiniz.
          Bizim misyon, erişilebilir ve kişiselleştirilmiş sağlık hizmetleri
          sunmaktır uzman tıbbi tavsiye ve tedavi arayan kişilere. Kullanarak
          platformumuz, Gizlilik Politikamızda belirtilen şartları kabul etmiş
          sayılırsınız ve Hizmet Şartları.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            margin: '16px 0',
            paddingBottom: '2px',
            borderBottom: '2px solid grey',
            fontSize: 32,
            fontWeight: 'bold',
            letterSpacing: '0.8px',
          }}>
          Gizlilik Politikası
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '16px',
            fontFamily: 'Rubik, sans-serif',
            fontSize: 18,
            letterSpacing: '0.8px',
            lineHeight: '1.8rem',
          }}>
          Gizliliğiniz bizim için çok önemlidir. Gizlilik Politikamız nasıl
          yaptığımızı özetlemektedir kişisel ve tıbbi bilgilerinizi toplayın,
          kullanın ve koruyun. Biz güvenli veri işleme sağlayın ve bilgilerinize
          güvenebilirsiniz son derece gizlilikle muamele edilir.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            margin: '16px 0',
            paddingBottom: '2px',
            borderBottom: '2px solid grey',
            fontSize: 32,
            fontWeight: 'bold',
            letterSpacing: '0.8px',
          }}>
          Hizmet Şartları
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '16px',
            fontFamily: 'Rubik, sans-serif',
            fontSize: 18,
            letterSpacing: '0.8px',
            lineHeight: '1.8rem',
          }}>
          Health Plus'ı kullanırken Hizmet Şartlarımızı kabul etmiş olursunuz.
          Bu platformumuzu kullanmak, doktorlarla etkileşim kurmak için
          yönergeler içerir, ve her iki tarafın sorumlulukları. Anlamak esastır
          tüm kullanıcılar için sorunsuz bir deneyim sağlamak için bu şartlar.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            margin: '16px 0',
            paddingBottom: '2px',
            borderBottom: '2px solid grey',
            fontSize: 32,
            fontWeight: 'bold',
            letterSpacing: '0.8px',
          }}>
          İstişareler
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '16px',
            fontFamily: 'Rubik, sans-serif',
            fontSize: 18,
            letterSpacing: '0.8px',
            lineHeight: '1.8rem',
          }}>
          Platformumuz sizi çevrimiçi hizmet veren uzman doktorlarla
          buluşturuyor istişareler. Bu istişareler şahsen yerine geçmez tıbbi
          ziyaretler ancak tıbbi tavsiye için uygun bir seçenek olarak hizmet
          eder, reçeteler ve rehberlik. Doğru ve doğru sağlamak çok önemlidir.
          mümkün olan en iyi bakımı almak için eksiksiz bilgi.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            margin: '16px 0',
            paddingBottom: '2px',
            borderBottom: '2px solid grey',
            fontSize: 32,
            fontWeight: 'bold',
            letterSpacing: '0.8px',
          }}>
          Nasıl Çalışır
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '16px',
            fontFamily: 'Rubik, sans-serif',
            fontSize: 18,
            letterSpacing: '0.8px',
            lineHeight: '1.8rem',
          }}>
          Health Plus, sağlık hizmetlerine erişimi kolaylaştırmak için
          tasarlanmıştır. Seçebilirsiniz bir uzman, randevu alın ve sanal bir
          işe girin danışmanlık. Uzmanlarımız kişiselleştirilmiş tavsiye ve
          tedavi sunar ihtiyaçlarınıza göre uyarlanmış planlar. Lütfen acil
          durumların gerektirdiğini unutmayın acil tıbbi yardım alınmalı ve
          bölgenize yönlendirilmelidir tıbbi tesis.
        </Typography>
      </Box>
      <Box
        sx={{
          padding: '24px 40px',
          display: 'block',
          color: 'black',
          fontFamily: 'Rubik, sans-serif',
          fontSize: 18,
          fontWeight: 'bold',
          letterSpacing: '0.8px',
          lineHeight: '1.6rem',
        }}>
        <Typography>© 2013-2024 Health+. All rights reserved.</Typography>
      </Box>
    </Container>
  );
}
