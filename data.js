
/**
 * Inter IKEA Group Financial Dataset
 * FY2022 vs FY2023 vs FY2024 vs FY2025 vs FY2026
 *
 * Financial units: EUR Billions (€B)
 * Net result and geographical income: EUR Millions (€M)
 */

window.ikeaFinancialData = {

    metadata: {
        entity: "Inter IKEA Group (Inter IKEA Holding B.V.)",

        timePeriod: {
            fy22: "FY2022",
            fy23: "FY2023",
            fy24: "1 September 2023 – 31 August 2024",
            fy25: "1 September 2024 – 31 August 2025",
            fy26: "1 September 2025 – 31 August 2026"
        },

        sampleSizeN: 5,

        notes: "Excludes Ingka Group retail operations. Financial figures reported in EUR Billions unless otherwise indicated."
    },

    // FINANCIAL METRICS

    metrics: [

        {
            category: "Total Operating Income",
            fy24: 26.538,
            fy25: 26.306,
            fy26: 25.864,
            absoluteChange: -0.442,
            percentChange: -1.68,
            description: "Total operating income."
        },

        {
            category: "Cost of Raw Materials & Consumables",
            fy25: 21.33,
            fy26: 20.66,
            absoluteChange: -0.67,
            percentChange: -3.15,
            description: "Direct procurement, manufacturing input, and supply-chain logistics costs."
        },

        {
            category: "Other Operating Expenses & Labour",
            fy25: 3.25,
            fy26: 3.75,
            absoluteChange: 0.50,
            percentChange: 15.22,
            description: "Includes wage inflation, digital system investments, and organizational restructuring costs."
        },

        {
            category: "Net Profit",
            fy24: 2.2,
            fy25: 1.50,
            fy26: 1.40,
            absoluteChange: -0.10,
            percentChange: -6.48,
            description: "Net profit after financial items and tax."
        }

    ],

    // EXACT NET RESULT FIGURES
    // Units: EUR Millions (€M)

    netResultMillions: {
        unit: "EUR Millions",
        fy24: 2199,
        fy25: 1496,
        fy26: 1399
    },

    // GEOGRAPHICAL DISTRIBUTION OF OPERATING INCOME
    // Units: EUR Millions (€M)

    geographicalIncome: {

        unit: "EUR Millions",

        regions: [
            "The Netherlands",
            "European Union",
            "Rest of the world"
        ],

        fy25: {
            label: "FY2025",
            values: [1177, 14452, 10677],
            total: 26306
        },

        fy26: {
            label: "FY2026",
            values: [1292, 14240, 10332],
            total: 25864
        }

    },

    // WORLDWIDE IKEA RETAIL SALES
    // Units: EUR Billions (€B)

    worldwideRetailSales: {

        unit: "EUR Billions",

        fy22: 44.6,
        fy23: 47.6,
        fy24: 45.1,
        fy25: 44.6,
        fy26: 43.8

    },

    // FINANCIAL RATIOS

    ratios: {

        fy25: {
            operatingMargin: 6.56,
            netMargin: 5.69,
            avgFTE: 25971
        },

        fy26: {
            operatingMargin: 5.64,
            netMargin: 5.41,
            avgFTE: 26826
        }

    }

};
