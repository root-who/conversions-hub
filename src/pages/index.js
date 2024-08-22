import ConversionCardList from "@/components/ConversionCardList";
import Header from "@/components/Header";
import HubMainInfo from "@/components/HubMainInfo";
import Head from "next/head";

export default function Home() {
  const data = [
    {
      title: "CSV to JSON / JSON to CSV",
      text: "Quickly convert CSV files to JSON format and vice versa. This tool ensures easy transformation between structured JSON data and tabular CSV data, making it simple to work with both formats."
    },
    {
      title: "Base64 Encode/Decode",
      text: "Easily encode or decode Base64 data. This tool allows you to securely convert binary data to text for safe transmission, or decode Base64-encoded strings back to their original format."
    },
    {
      title: "SVG to PNG",
      text: "Quickly convert your scalable vector graphics (SVG) to raster PNG images. This tool ensures that your SVG files are transformed into high-quality PNGs while retaining the original visual fidelity for use in various platforms."
    },
    {
      title: "HEX to RGB / RGB to HEX",
      text: "Effortlessly convert color codes between HEX and RGB formats. This tool helps you switch between these two common color representations, ensuring consistency and precision in your designs."
    },
    {
      title: "JSON to YAML / YAML to JSON",
      text: "Seamlessly convert JSON data to YAML format and vice versa. This tool makes it easy to switch between these popular data serialization formats, ensuring compatibility and readability in various development environments."
    },
  ]
  return (
    <>
      <Head>
        <title>Conversions Hub</title>
        <meta name="description" content="Hub of useful conversions"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <HubMainInfo data={{
            info:"Useful Conversions Pack", 
            description:"Conversions Hub was created to make developer's lives easier. We offer fast, free, open-source tools with no ads, enabling you to convert your data and images efficiently."
          }}
      />
      <ConversionCardList conversors={data}/>
    </>
  );
}
