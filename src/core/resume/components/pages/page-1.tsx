import type { FC } from 'react'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBrowser, faPhoneRotary } from '@fortawesome/pro-regular-svg-icons'
import { Image, Link, Page, Text, View } from '@react-pdf/renderer'

import FontAwesomeIcon from '@alecia/core/resume/components/template/font-awesome-icon'
import { COLORS, styles, tw } from '@alecia/core/resume/constants'

const IMG_WIDTH = 580

const ResumeFrontPage: FC = () => {
  return (
    <Page wrap size="A4" style={styles.frontPage}>
      <View style={{ position: 'absolute', bottom: 0, right: -170 }}>
        <Image
          src="/alecia_duotone2024.png"
          style={{ zIndex: 1, marginTop: -3, width: IMG_WIDTH }}
        />
      </View>

      <View style={tw('w-full')}>
        <Text style={{ ...tw('text-white leading-relaxed'), ...{ lineHeight: 0.8, fontSize: 90 } }}>
          <Text style={{ ...tw('lowercase'), ...{ fontFamily: 'Helvetica' } }}>Alecia</Text>
          <Text
            style={{
              ...{ fontFamily: 'Helvetica-Bold', color: COLORS.pink },
              ...tw('lowercase'),
              ...styles.fontBold,
            }}
          >
            Vogel
          </Text>
        </Text>

        <View style={tw('mt-6')}>
          <Text
            style={{
              ...styles.fontBold,
              ...tw('mt-4 tracking-tight leading-none text-2xl text-white w-full'),
              ...{ fontFamily: 'Helvetica-Bold', lineHeight: 1.25 },
            }}
          >
            — Senior Full-Stack Developer
          </Text>
        </View>

        <View style={{ ...tw('mt-6'), ...{ width: 400 } }}>
          <Text style={{ ...tw('text-white text-lg'), ...{ lineHeight: 1.5 } }}>
            Coding since the age of 8, I bring over two decades of passion for web development and
            programming to the table. My philosophy revolves around human-centered design and
            collaboration,
            {'\n'}
            essential pillars that I believe contribute to a{'\n'}
            product&apos;s long-term success.
          </Text>
          <Text style={tw('mt-4 text-white text-lg leading-snug')}>
            Skilled in both leadership and technical {'\n'}
            execution, I drive projects from concept to {'\n'}
            completion.
          </Text>
        </View>

        <View style={{ ...tw('mt-8'), ...{ width: 400 } }}>
          <Text
            style={{ ...styles.fontBold, ...tw('text-lg mb-2'), ...{ color: COLORS.lightPink } }}
          >
            Key Skills
          </Text>

          <View style={tw('flex flex-row text-white text-base mb-2')}>
            <Text style={tw('mr-2')}>&#x2022;</Text>
            <Text>
              Strong proficiency in TypeScript, ReactJS*, {'\n'}
              Python, and PHP.
            </Text>
          </View>
          <View style={tw('flex flex-row text-white text-base mb-2')}>
            <Text style={tw('mr-2')}>&#x2022;</Text>
            <Text>
              Experience with cutting-edge tech such as {'\n'}
              NextJS, Prisma, Pinecone, and OpenAI.
            </Text>
          </View>
          <View style={tw('flex flex-row text-white text-base')}>
            <Text style={tw('mr-2')}>&#x2022;</Text>
            <Text>
              Proven ability to lead front-end projects, {'\n'}
              including AI-powered features and {'\n'}
              data-driven dashboards.
            </Text>
          </View>
        </View>

        <View style={{ ...tw('mt-8'), ...{ width: 400 } }}>
          <Text style={{ ...styles.fontBold, ...tw('text-lg'), ...{ color: COLORS.lightPink } }}>
            Get In Touch
          </Text>

          <Link src="https://alecia.ca" style={tw('flex flex-row items-center mt-2 no-underline')}>
            <FontAwesomeIcon
              faIcon={faBrowser}
              style={{ color: 'white', width: 15, marginRight: 8 }}
            />
            <Text style={{ ...tw('text-white text-base mb-2'), ...{ lineHeight: 0.75 } }}>
              alecia.ca
            </Text>
          </Link>

          <Link
            src={'https://linkedin.com/in/alecia-vogel'}
            style={tw('flex flex-row items-center mt-3 no-underline')}
          >
            <FontAwesomeIcon
              faIcon={faLinkedin}
              style={{ color: 'white', width: 15, height: 15, marginRight: 8 }}
            />
            <Text style={{ ...tw('text-white text-base mb-2'), ...{ lineHeight: 0.75 } }}>
              linkedin.com/in/alecia-vogel
            </Text>
          </Link>
        </View>

        <Link
          src="https://github.com/aleciavogel"
          style={tw('flex flex-row items-center mt-3 no-underline')}
        >
          <FontAwesomeIcon
            faIcon={faGithub}
            style={{ color: 'white', width: 15, height: 15, marginRight: 8 }}
          />
          <Text style={{ ...tw('text-white text-base mb-2'), ...{ lineHeight: 0.75 } }}>
            github.com/aleciavogel
          </Text>
        </Link>

        <Link
          src="mailto:hello@alecia.ca?subject=Nice resume!"
          style={tw('flex flex-row items-center mt-3 no-underline')}
        >
          <FontAwesomeIcon
            faIcon={faEnvelope}
            style={{ color: 'white', width: 15, height: 15, marginRight: 8 }}
          />
          <Text style={{ ...tw('text-white text-base mb-2'), ...{ lineHeight: 0.75 } }}>
            hello@alecia.ca
          </Text>
        </Link>

        <Link src="tel:17802325323" style={tw('flex flex-row items-center mt-3 no-underline')}>
          <FontAwesomeIcon
            faIcon={faPhoneRotary}
            style={{ color: 'white', width: 15, marginRight: 8 }}
          />
          <Text style={{ ...tw('text-white text-base mb-2'), ...{ lineHeight: 0.75 } }}>
            +1 (780) 232-5323
          </Text>
        </Link>

        <Link src="https://linktr.ee/aleciavogel" style={tw('mt-10')}>
          <Image src={'/linktree.png'} style={{ width: 70 }} />
        </Link>
      </View>

      <View style={{ ...tw('absolute bottom-2 text-white text-right text-xs'), ...{ right: 10 } }}>
        <Text>
          <Link
            src="https://github.com/aleciavogel/resume-generator"
            style={{
              ...{ fontFamily: 'Helvetica-Oblique' },
              ...tw('text-white text-right no-underline'),
            }}
          >
            *This resume was built with ReactJS and TailwindCSS!{'\n'}
            Click here to check out the code on my GitHub.
          </Link>
        </Text>
      </View>
    </Page>
  )
}

export default ResumeFrontPage
