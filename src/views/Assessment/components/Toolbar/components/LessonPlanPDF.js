import { Page, View, Text, Image, Document } from '@react-18-pdf/renderer';
import styles from './LessonPlanStyles';

export default function InvoicePDF({ lessonPlan }) {
  const {
    title,
    objective,
    materials,
    time,
    warmUp,
    directInstruction,
    guidedPractice,
    independentPractice,
    conclusion,
    debrief,
  } = lessonPlan;

  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text>{title}</Text>
        </View>
        <View style={styles.section}>
          <Text>{objective}</Text>
        </View>
      </Page>
    </Document>
  );
}
