import { Box, Link, List, ListItem, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <Box
      sx={{
        background: '#1B2433',
        px: 7,
      }}>
      <Box
        sx={{
          padding: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
          color: 'white',
          borderBottom: '2px solid #293241',
          borderRadius: '2px',
        }}>
        <Box sx={{ flex: '1 1 300px', maxWidth: '300px' }}>
          <Typography
            sx={{
              color: '#1A8EFD',
              letterSpacing: '6px',
              fontSize: { xs: '20px', md: '40px' },
              textDecoration: 'none',
              fontWeight: 'bold',
            }}>
            Healty{' '}
            <span
              style={{
                color: '#1ECAB0',
                fontSize: '40px',
                fontWeight: 'bold',
              }}>
              +
            </span>
          </Typography>
          <Typography
            sx={{
              margin: '16px 0 40px',
              color: '#D0D3DA',
              fontSize: '20px',
              lineHeight: '1.7rem',
            }}>
            Çevrimiçi doktorlarla konuşun ve çevrimiçi olarak tıbbi tavsiye alın
            dakikalar içinde reçeteler, yedekler ve tıbbi notlar. Talep üzerine
            parmaklarınızın ucunda sağlık hizmetleri.
          </Typography>
        </Box>
        <Box
          sx={{ flex: '1 1 200px', maxWidth: '200px', marginBottom: '1.5rem' }}>
          <Typography
            sx={{
              margin: '16px 0',
              fontSize: '24px',
              fontWeight: 'bold',
              pl: 2,
            }}
            variant="h6">
            Hizmetler
          </Typography>
          <List>
            {[
              'Acil Bakım',
              'Kalp Hastalığı',
              'Diş Bakımı',
              'Reçete',
              'Doktorlar için içgörüler',
            ].map((item) => (
              <ListItem key={item}>
                <Link
                  href="#services"
                  sx={{ color: 'inherit', textDecoration: 'none' }}>
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{ flex: '1 1 200px', maxWidth: '200px', marginBottom: '1.5rem' }}>
          <Typography
            sx={{
              margin: '16px 0',
              fontSize: '24px',
              fontWeight: 'bold',
              pl: 2,
            }}
            variant="h6">
            Yasal
          </Typography>
          <List>
            {[
              'Genel Bilgi',
              'Gizlilik Politikası',
              'Hizmet Şartları',
              'İstişareler',
              'Nasıl Çalışır',
            ].map((item) => (
              <ListItem key={item}>
                <Link
                  href="/legal"
                  sx={{ color: 'inherit', textDecoration: 'none' }}>
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          id="contact"
          sx={{ flex: '1 1 200px', maxWidth: '200px', marginBottom: '1.5rem' }}>
          <Typography
            sx={{
              padding: '16px 0',
              fontSize: '24px',
              fontWeight: 'bold',
              pl: 2,
            }}
            variant="h6">
            Bizimle konuş
          </Typography>
          <List>
            {[
              {
                text: 'support@healthplus.com',
                href: 'mailto:support@healthplus.com',
              },
              {
                text: 'appointment@healthplus.com',
                href: 'mailto:appointment@healthplus.com',
              },
              { text: '+022 5454 5252', href: 'tel:+022 5454 5252' },
              { text: '+022 2326 6232', href: 'tel:+022 2326 6232' },
            ].map((item) => (
              <ListItem key={item.text}>
                <Link
                  href={item.href}
                  sx={{ color: 'inherit', textDecoration: 'none' }}>
                  {item.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flex: '1 1 100%',
          }}>
          <Link
            href="https://www.linkedin.com/in/tunahan-bu%C3%A7ak-473812247/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" sx={{ color: 'inherit' }} />
          </Link>
          <Link
            href="https://facebook.com/"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer">
            <FacebookIcon fontSize="large" sx={{ color: 'inherit' }} />
          </Link>
          <Link
            href="https://x.com/TunahanBucak"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer">
            <XIcon fontSize="large" sx={{ color: 'inherit' }} />
          </Link>
        </Box>
        <Box sx={{ marginTop: '1.5rem', textAlign: 'center', width: '100%' }}>
          <Typography variant="body2">
            © 2013-2024 Health+. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
