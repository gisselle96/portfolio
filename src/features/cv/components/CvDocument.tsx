import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { cv } from "@/features/cv/constants/content";

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 48,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#101820",
    lineHeight: 1.45,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  role: {
    fontSize: 12,
    color: "#0b6e7a",
    marginBottom: 8,
  },
  meta: {
    fontSize: 9,
    color: "#44515c",
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#0b6e7a",
    marginBottom: 8,
    marginTop: 16,
  },
  paragraph: {
    marginBottom: 6,
    color: "#334049",
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 4,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
  },
  jobPeriod: {
    fontSize: 9,
    color: "#44515c",
  },
  company: {
    fontSize: 9,
    color: "#44515c",
    marginBottom: 6,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 3,
  },
  skillGroup: {
    marginBottom: 6,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 48,
    right: 48,
    fontSize: 8,
    color: "#6b7780",
  },
});

export function CvDocument() {
  return (
    <Document
      title={`${cv.name} · CV`}
      author={cv.name}
      subject="Curriculum Vitae"
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{cv.name}</Text>
        <Text style={styles.role}>{cv.role}</Text>
        <Text style={styles.meta}>
          {cv.location} · {cv.email} · {cv.links.github} · {cv.links.linkedin}
        </Text>

        <Text style={styles.sectionTitle}>Resumen</Text>
        <Text style={styles.paragraph}>{cv.summary}</Text>

        <Text style={styles.sectionTitle}>Experiencia</Text>
        {cv.experience.map((job) => (
          <View key={`${job.title}-${job.company}`} wrap={false}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobPeriod}>{job.period}</Text>
            </View>
            <Text style={styles.company}>{job.company}</Text>
            {job.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Skills</Text>
        {cv.skills.map((group) => (
          <View key={group.label} style={styles.skillGroup}>
            <Text style={styles.skillLabel}>{group.label}</Text>
            <Text>{group.items.join(" · ")}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Educación</Text>
        {cv.education.map((item) => (
          <View key={item.title}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.paragraph}>{item.detail}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Idiomas</Text>
        {cv.languages.map((item) => (
          <Text key={item.label} style={styles.paragraph}>
            {item.label} — {item.level}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Forma de trabajo</Text>
        {cv.workStyle.map((item) => (
          <Text key={item} style={styles.bullet}>
            • {item}
          </Text>
        ))}

        <Text style={styles.footer}>
          Actualizado {cv.updatedAt} · Generado desde el portafolio
        </Text>
      </Page>
    </Document>
  );
}
