export default {
  data: {
    result: {
      input: {
        benchmark: {
          id: "2020",
          benchmarkName: "Public_AR_Census2020",
          benchmarkDescription: "Public Address Ranges - Census 2020 Benchmark",
          isDefault: false,
        },
        address: { address: "310 W 7th St Washington KS 66968 USA" },
      },
      addressMatches: [
        {
          matchedAddress: "310 W 7TH ST, WASHINGTON, KS, 66968",
          coordinates: { x: -97.05696, y: 39.813576 },
          tigerLine: { tigerLineId: "11576302", side: "L" },
          addressComponents: {
            fromAddress: "300",
            toAddress: "312",
            preQualifier: "",
            preDirection: "W",
            preType: "",
            streetName: "7TH",
            suffixType: "ST",
            suffixDirection: "",
            suffixQualifier: "",
            city: "WASHINGTON",
            state: "KS",
            zip: "66968",
          },
        },
      ],
    },
  },
};
