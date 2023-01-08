import { PDFDownloadLink, PDFViewer } from '@react-18-pdf/renderer';
// @mui
import { Box, Stack, Button, Dialog, Tooltip, IconButton, DialogActions, CircularProgress, Icon } from '@mui/material';
//
import LessonPlanPDF from './components/LessonPlanPDF';

// ----------------------------------------------------------------------

export default function Toolbar({ lessonPlan }) {
  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        alignItems={{ sm: 'center' }}
        sx={{ mb: 5 }}
      >
        <Stack direction='row' spacing={1}>
          <PDFDownloadLink
            document={<LessonPlanPDF lessonPlan={lessonPlan} />}
            fileName={lessonPlan.title}
            style={{ textDecoration: 'none' }}
          >
            {({ loading }) => (
              <Tooltip title='Download'>
                <IconButton>
                  {loading ? <CircularProgress size={24} color='inherit' /> : <Icon icon={fileDownloadFill} />}
                </IconButton>
              </Tooltip>
            )}
          </PDFDownloadLink>
        </Stack>
      </Stack>

      <Dialog fullScreen open={open}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
            <PDFViewer width='100%' height='100%' style={{ border: 'none' }}>
              <LessonPlanPDF lessonPlan={lessonPlan} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
