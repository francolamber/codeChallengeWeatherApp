export default {
  data: {
    "@context": [
      "https://geojson.org/geojson-ld/geojson-context.jsonld",
      {
        "@version": "1.1",
        wx: "https://api.weather.gov/ontology#",
        s: "https://schema.org/",
        geo: "http://www.opengis.net/ont/geosparql#",
        unit: "http://codes.wmo.int/common/unit/",
        "@vocab": "https://api.weather.gov/ontology#",
        geometry: {
          "@id": "s:GeoCoordinates",
          "@type": "geo:wktLiteral",
        },
        city: "s:addressLocality",
        state: "s:addressRegion",
        distance: {
          "@id": "s:Distance",
          "@type": "s:QuantitativeValue",
        },
        bearing: {
          "@type": "s:QuantitativeValue",
        },
        value: {
          "@id": "s:value",
        },
        unitCode: {
          "@id": "s:unitCode",
          "@type": "@id",
        },
        forecastOffice: {
          "@type": "@id",
        },
        forecastGridData: {
          "@type": "@id",
        },
        publicZone: {
          "@type": "@id",
        },
        county: {
          "@type": "@id",
        },
      },
    ],
    id: "https://api.weather.gov/points/39.8136,-97.057",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.057000000000002, 39.813600000000001],
    },
    properties: {
      "@id": "https://api.weather.gov/points/39.8136,-97.057",
      "@type": "wx:Point",
      cwa: "TOP",
      forecastOffice: "https://api.weather.gov/offices/TOP",
      gridId: "TOP",
      gridX: 32,
      gridY: 83,
      forecast: "https://api.weather.gov/gridpoints/TOP/32,83/forecast",
      forecastHourly:
        "https://api.weather.gov/gridpoints/TOP/32,83/forecast/hourly",
      forecastGridData: "https://api.weather.gov/gridpoints/TOP/32,83",
      observationStations:
        "https://api.weather.gov/gridpoints/TOP/32,83/stations",
      relativeLocation: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-97.050113899999999, 39.816903000000003],
        },
        properties: {
          city: "Washington",
          state: "KS",
          distance: {
            unitCode: "wmoUnit:m",
            value: 693.40225507960997,
          },
          bearing: {
            unitCode: "wmoUnit:degree_(angle)",
            value: 238,
          },
        },
      },
      forecastZone: "https://api.weather.gov/zones/forecast/KSZ009",
      county: "https://api.weather.gov/zones/county/KSC201",
      fireWeatherZone: "https://api.weather.gov/zones/fire/KSZ009",
      timeZone: "America/Chicago",
      radarStation: "KTWX",
    },
  },
};
