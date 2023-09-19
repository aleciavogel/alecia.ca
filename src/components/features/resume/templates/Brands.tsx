import { Text, View, Image } from "@react-pdf/renderer";
import { tw, styles } from "../constants";

export default function BrandsSection() {
  return (
    <View style={[styles.section]}>
      <Text style={tw("text-base mt-2")}>Client Portfolio</Text>

      <View style={tw("flex flex-row flex-wrap items-center justify-between")}>
        <Image src="/brands/aheia.jpeg" style={[tw("pr-4 mb-10 w-1/6")]} />
        <Image src="/brands/amii.png" style={[tw("pr-4 w-1/6")]} />
        <Image src="/brands/iic.jpeg" style={[tw("pr-4 mb-10 w-1/6")]} />
        <Image src="/brands/norquest.png" style={[tw("pr-4 w-1/6")]} />
        <Image src="/brands/worldvision.png" style={[tw("pr-4 w-1/6")]} />

        <Image src="/brands/apega.png" style={[tw("pr-4 w-1/6")]} />
        <Image src="/brands/edmonton_elks.png" style={[tw("pr-4 mb-6 w-1/6")]} />
        <Image src="/brands/ualberta.png" style={[tw("pr-4 w-1/6")]} />
        <Image src="/brands/mna.png" style={[tw("pr-4 w-1/6")]} />
        <Image src="/brands/iata.png" style={[tw("w-1/6")]} />

        <Image src="/brands/ahs.png" style={[tw("pr-4 w-1/4")]} />
        <Image src="/brands/albertagov.png" style={[tw("pr-4 mt-6 w-1/4")]} />
        <Image src="/brands/albertainnovates.png" style={[tw("pr-4 w-1/4")]} />
      </View>
    </View>
  );
}
