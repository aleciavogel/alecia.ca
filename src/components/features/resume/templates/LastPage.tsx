import { Page, View, Text, Link } from "@react-pdf/renderer";

import { COLORS, styles, tw } from "../constants";

export default function ResumeLastPage() {
  return (
    <Page size="A4" style={[styles.frontPage, { padding: "100px 50px 0px" }]}>
      <View style={[tw("mx-auto")]}>
        <View>
          <Text style={[tw("text-white leading-relaxed"), { lineHeight: 0.8, fontSize: 70 }]}>
            <Text style={[tw("lowercase"), { fontFamily: "Helvetica" }]}>thank</Text>
            <Text
              style={[
                { fontFamily: "Helvetica-Bold", color: COLORS.pink },
                tw("lowercase"),
                styles.fontBold,
              ]}
            >
              you
            </Text>
          </Text>
        </View>

        <View style={[tw("mt-10"), { width: 400 }]}>
          <Text style={[tw("text-white text-lg"), { lineHeight: 1.5 }]}>
            I appreciate the time and consideration you've devoted to reviewing my resume. Your
            commitment to finding the right fit for your company speaks volumes, and I'm grateful to
            be part of this process.{"\n\n"}
            If you have any feedback to share about my application, I'd greatly appreciate the
            opportunity to learn and improve.{"\n\n"}
            Looking forward to the potential of contributing to your team's success.{"\n\n"}
            Warm regards,{"\n"}
            <Text style={[tw("text-2xl"), styles.fontBold]}>Alecia Vogel</Text>
            {"\n"}
            <Text style={tw("text-base")}>
              <Text style={[styles.fontBold]}>PS - </Text>
              Interested in discussing how we can collaborate? Let's find a time that works for both
              of us:{" "}
              <Link
                src="https://calendly.com/aleciavogel"
                style={[styles.fontBold, tw("no-underline"), { color: COLORS.lightPink }]}
              >
                calendly.com/aleciavogel
              </Link>
            </Text>
          </Text>
        </View>
      </View>
    </Page>
  );
}
