import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { cvByLocale } from "@/features/cv/constants/content";
import type { Locale } from "@/i18n/types";

/** Single column, standard headings, real text only: easy for ATS parsers. */
const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 42,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: "#101820",
    lineHeight: 1.3,
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.2,
    marginBottom: 8,
  },
  role: {
    fontSize: 11.5,
    marginBottom: 6,
  },
  contactLine: {
    fontSize: 9.5,
    color: "#334049",
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 10,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 0.75,
    borderBottomColor: "#101820",
  },
  paragraph: {
    marginBottom: 4,
  },
  job: {
    marginBottom: 6,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  jobMeta: {
    fontSize: 9.5,
    color: "#334049",
    marginBottom: 3,
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 2,
  },
  skillLine: {
    marginBottom: 3,
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    fontSize: 8,
    color: "#6b7780",
  },
});

export function CvDocument({ locale = "es" }: { locale?: Locale } = {}) {
  const cv = cvByLocale[locale];

  return (
    <Document
      title={`${cv.name} · CV`}
      author={cv.name}
      subject={cv.role}
      keywords={cv.skills.flatMap((group) => group.items).join(", ")}
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{cv.name}</Text>
        <Text style={styles.role}>{cv.role}</Text>
        <Text style={styles.contactLine}>
          {`${cv.location} · ${cv.email} · ${cv.phone}`}
        </Text>
        <Text style={styles.contactLine}>
          {`LinkedIn: ${cv.links.linkedin} · GitHub: ${cv.links.github}`}
        </Text>

        <Text style={styles.sectionTitle}>{cv.headings.summary}</Text>
        <Text style={styles.paragraph}>{cv.summary}</Text>

        <Text style={styles.sectionTitle}>{cv.headings.experience}</Text>
        {cv.experience.map((job) => (
          <View key={`${job.title}-${job.period}`} style={styles.job} wrap={false}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobMeta}>{job.period}</Text>
            </View>
            <Text style={styles.jobMeta}>
              {job.company} · {job.location}
            </Text>
            {job.bullets.map((bullet) => (
              <Text key={bullet} style={styles.bullet}>
                • {bullet}
              </Text>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>{cv.headings.skills}</Text>
        {cv.skills.map((group) => (
          <Text key={group.label} style={styles.skillLine}>
            <Text style={styles.bold}>{group.label}: </Text>
            {group.items.join(", ")}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>{cv.headings.education}</Text>
        {cv.education.map((item) => (
          <View key={item.title} wrap={false}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobMeta}>{item.period}</Text>
            </View>
            <Text style={styles.jobMeta}>{item.school}</Text>
            <Text style={styles.paragraph}>{item.detail}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{cv.headings.languages}</Text>
        <Text style={styles.paragraph}>
          {cv.languages.map((item) => `${item.label}: ${item.level}`).join(" · ")}
        </Text>

        <Text style={styles.footer} fixed>
          {`${cv.headings.updated} ${cv.updatedAt}`}
        </Text>
      </Page>
    </Document>
  );
}
