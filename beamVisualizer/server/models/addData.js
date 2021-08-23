const {query} = require('./postgresModel.js');
const pool = require('./postgresModel.js'); 
require('regenerator-runtime/runtime')

let currencyData = [{
	"symbol": "$",
	"name": "US Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "USD",
	"name_plural": "US dollars"
}, {
	"symbol": "CA$",
	"name": "Canadian Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "CAD",
	"name_plural": "Canadian dollars"
}, {
	"symbol": "€",
	"name": "Euro",
	"symbol_native": "€",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "EUR",
	"name_plural": "euros"
}, {
	"symbol": "AED",
	"name": "United Arab Emirates Dirham",
	"symbol_native": "د.إ.‏",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "AED",
	"name_plural": "UAE dirhams"
}, {
	"symbol": "Af",
	"name": "Afghan Afghani",
	"symbol_native": "؋",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "AFN",
	"name_plural": "Afghan Afghanis"
}, {
	"symbol": "ALL",
	"name": "Albanian Lek",
	"symbol_native": "Lek",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "ALL",
	"name_plural": "Albanian lekë"
}, {
	"symbol": "AMD",
	"name": "Armenian Dram",
	"symbol_native": "դր.",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "AMD",
	"name_plural": "Armenian drams"
}, {
	"symbol": "AR$",
	"name": "Argentine Peso",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "ARS",
	"name_plural": "Argentine pesos"
}, {
	"symbol": "AU$",
	"name": "Australian Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "AUD",
	"name_plural": "Australian dollars"
}, {
	"symbol": "man.",
	"name": "Azerbaijani Manat",
	"symbol_native": "ман.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "AZN",
	"name_plural": "Azerbaijani manats"
}, {
	"symbol": "KM",
	"name": "Bosnia-Herzegovina Convertible Mark",
	"symbol_native": "KM",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BAM",
	"name_plural": "Bosnia-Herzegovina convertible marks"
}, {
	"symbol": "Tk",
	"name": "Bangladeshi Taka",
	"symbol_native": "৳",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BDT",
	"name_plural": "Bangladeshi takas"
}, {
	"symbol": "BGN",
	"name": "Bulgarian Lev",
	"symbol_native": "лв.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BGN",
	"name_plural": "Bulgarian leva"
}, {
	"symbol": "BD",
	"name": "Bahraini Dinar",
	"symbol_native": "د.ب.‏",
	"decimal_digits": 3,
	"rounding": 0,
	"code": "BHD",
	"name_plural": "Bahraini dinars"
}, {
	"symbol": "FBu",
	"name": "Burundian Franc",
	"symbol_native": "FBu",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "BIF",
	"name_plural": "Burundian francs"
}, {
	"symbol": "BN$",
	"name": "Brunei Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BND",
	"name_plural": "Brunei dollars"
}, {
	"symbol": "Bs",
	"name": "Bolivian Boliviano",
	"symbol_native": "Bs",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BOB",
	"name_plural": "Bolivian bolivianos"
}, {
	"symbol": "R$",
	"name": "Brazilian Real",
	"symbol_native": "R$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BRL",
	"name_plural": "Brazilian reals"
}, {
	"symbol": "BWP",
	"name": "Botswanan Pula",
	"symbol_native": "P",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BWP",
	"name_plural": "Botswanan pulas"
}, {
	"symbol": "BYR",
	"name": "Belarusian Ruble",
	"symbol_native": "BYR",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "BYR",
	"name_plural": "Belarusian rubles"
}, {
	"symbol": "BZ$",
	"name": "Belize Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "BZD",
	"name_plural": "Belize dollars"
}, {
	"symbol": "CDF",
	"name": "Congolese Franc",
	"symbol_native": "FrCD",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "CDF",
	"name_plural": "Congolese francs"
}, {
	"symbol": "CHF",
	"name": "Swiss Franc",
	"symbol_native": "CHF",
	"decimal_digits": 2,
	"rounding": 0.05,
	"code": "CHF",
	"name_plural": "Swiss francs"
}, {
	"symbol": "CL$",
	"name": "Chilean Peso",
	"symbol_native": "$",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "CLP",
	"name_plural": "Chilean pesos"
}, {
	"symbol": "CN¥",
	"name": "Chinese Yuan",
	"symbol_native": "CN¥",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "CNY",
	"name_plural": "Chinese yuan"
}, {
	"symbol": "CO$",
	"name": "Colombian Peso",
	"symbol_native": "$",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "COP",
	"name_plural": "Colombian pesos"
}, {
	"symbol": "₡",
	"name": "Costa Rican Colón",
	"symbol_native": "₡",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "CRC",
	"name_plural": "Costa Rican colóns"
}, {
	"symbol": "CV$",
	"name": "Cape Verdean Escudo",
	"symbol_native": "CV$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "CVE",
	"name_plural": "Cape Verdean escudos"
}, {
	"symbol": "Kč",
	"name": "Czech Republic Koruna",
	"symbol_native": "Kč",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "CZK",
	"name_plural": "Czech Republic korunas"
}, {
	"symbol": "Fdj",
	"name": "Djiboutian Franc",
	"symbol_native": "Fdj",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "DJF",
	"name_plural": "Djiboutian francs"
}, {
	"symbol": "Dkr",
	"name": "Danish Krone",
	"symbol_native": "kr",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "DKK",
	"name_plural": "Danish kroner"
}, {
	"symbol": "RD$",
	"name": "Dominican Peso",
	"symbol_native": "RD$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "DOP",
	"name_plural": "Dominican pesos"
}, {
	"symbol": "DA",
	"name": "Algerian Dinar",
	"symbol_native": "د.ج.‏",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "DZD",
	"name_plural": "Algerian dinars"
}, {
	"symbol": "Ekr",
	"name": "Estonian Kroon",
	"symbol_native": "kr",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "EEK",
	"name_plural": "Estonian kroons"
}, {
	"symbol": "EGP",
	"name": "Egyptian Pound",
	"symbol_native": "ج.م.‏",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "EGP",
	"name_plural": "Egyptian pounds"
}, {
	"symbol": "Nfk",
	"name": "Eritrean Nakfa",
	"symbol_native": "Nfk",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "ERN",
	"name_plural": "Eritrean nakfas"
}, {
	"symbol": "Br",
	"name": "Ethiopian Birr",
	"symbol_native": "Br",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "ETB",
	"name_plural": "Ethiopian birrs"
}, {
	"symbol": "£",
	"name": "British Pound Sterling",
	"symbol_native": "£",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "GBP",
	"name_plural": "British pounds sterling"
}, {
	"symbol": "GEL",
	"name": "Georgian Lari",
	"symbol_native": "GEL",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "GEL",
	"name_plural": "Georgian laris"
}, {
	"symbol": "GH₵",
	"name": "Ghanaian Cedi",
	"symbol_native": "GH₵",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "GHS",
	"name_plural": "Ghanaian cedis"
}, {
	"symbol": "FG",
	"name": "Guinean Franc",
	"symbol_native": "FG",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "GNF",
	"name_plural": "Guinean francs"
}, {
	"symbol": "GTQ",
	"name": "Guatemalan Quetzal",
	"symbol_native": "Q",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "GTQ",
	"name_plural": "Guatemalan quetzals"
}, {
	"symbol": "HK$",
	"name": "Hong Kong Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "HKD",
	"name_plural": "Hong Kong dollars"
}, {
	"symbol": "HNL",
	"name": "Honduran Lempira",
	"symbol_native": "L",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "HNL",
	"name_plural": "Honduran lempiras"
}, {
	"symbol": "kn",
	"name": "Croatian Kuna",
	"symbol_native": "kn",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "HRK",
	"name_plural": "Croatian kunas"
}, {
	"symbol": "Ft",
	"name": "Hungarian Forint",
	"symbol_native": "Ft",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "HUF",
	"name_plural": "Hungarian forints"
}, {
	"symbol": "Rp",
	"name": "Indonesian Rupiah",
	"symbol_native": "Rp",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "IDR",
	"name_plural": "Indonesian rupiahs"
}, {
	"symbol": "₪",
	"name": "Israeli New Sheqel",
	"symbol_native": "₪",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "ILS",
	"name_plural": "Israeli new sheqels"
}, {
	"symbol": "Rs",
	"name": "Indian Rupee",
	"symbol_native": "টকা",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "INR",
	"name_plural": "Indian rupees"
}, {
	"symbol": "IQD",
	"name": "Iraqi Dinar",
	"symbol_native": "د.ع.‏",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "IQD",
	"name_plural": "Iraqi dinars"
}, {
	"symbol": "IRR",
	"name": "Iranian Rial",
	"symbol_native": "﷼",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "IRR",
	"name_plural": "Iranian rials"
}, {
	"symbol": "Ikr",
	"name": "Icelandic Króna",
	"symbol_native": "kr",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "ISK",
	"name_plural": "Icelandic krónur"
}, {
	"symbol": "J$",
	"name": "Jamaican Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "JMD",
	"name_plural": "Jamaican dollars"
}, {
	"symbol": "JD",
	"name": "Jordanian Dinar",
	"symbol_native": "د.أ.‏",
	"decimal_digits": 3,
	"rounding": 0,
	"code": "JOD",
	"name_plural": "Jordanian dinars"
}, {
	"symbol": "¥",
	"name": "Japanese Yen",
	"symbol_native": "￥",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "JPY",
	"name_plural": "Japanese yen"
}, {
	"symbol": "Ksh",
	"name": "Kenyan Shilling",
	"symbol_native": "Ksh",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "KES",
	"name_plural": "Kenyan shillings"
}, {
	"symbol": "KHR",
	"name": "Cambodian Riel",
	"symbol_native": "៛",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "KHR",
	"name_plural": "Cambodian riels"
}, {
	"symbol": "CF",
	"name": "Comorian Franc",
	"symbol_native": "FC",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "KMF",
	"name_plural": "Comorian francs"
}, {
	"symbol": "₩",
	"name": "South Korean Won",
	"symbol_native": "₩",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "KRW",
	"name_plural": "South Korean won"
}, {
	"symbol": "KD",
	"name": "Kuwaiti Dinar",
	"symbol_native": "د.ك.‏",
	"decimal_digits": 3,
	"rounding": 0,
	"code": "KWD",
	"name_plural": "Kuwaiti dinars"
}, {
	"symbol": "KZT",
	"name": "Kazakhstani Tenge",
	"symbol_native": "тңг.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "KZT",
	"name_plural": "Kazakhstani tenges"
}, {
	"symbol": "LB£",
	"name": "Lebanese Pound",
	"symbol_native": "ل.ل.‏",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "LBP",
	"name_plural": "Lebanese pounds"
}, {
	"symbol": "SLRs",
	"name": "Sri Lankan Rupee",
	"symbol_native": "SL Re",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "LKR",
	"name_plural": "Sri Lankan rupees"
}, {
	"symbol": "Lt",
	"name": "Lithuanian Litas",
	"symbol_native": "Lt",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "LTL",
	"name_plural": "Lithuanian litai"
}, {
	"symbol": "Ls",
	"name": "Latvian Lats",
	"symbol_native": "Ls",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "LVL",
	"name_plural": "Latvian lati"
}, {
	"symbol": "LD",
	"name": "Libyan Dinar",
	"symbol_native": "د.ل.‏",
	"decimal_digits": 3,
	"rounding": 0,
	"code": "LYD",
	"name_plural": "Libyan dinars"
}, {
	"symbol": "MAD",
	"name": "Moroccan Dirham",
	"symbol_native": "د.م.‏",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MAD",
	"name_plural": "Moroccan dirhams"
}, {
	"symbol": "MDL",
	"name": "Moldovan Leu",
	"symbol_native": "MDL",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MDL",
	"name_plural": "Moldovan lei"
}, {
	"symbol": "MGA",
	"name": "Malagasy Ariary",
	"symbol_native": "MGA",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "MGA",
	"name_plural": "Malagasy Ariaries"
}, {
	"symbol": "MKD",
	"name": "Macedonian Denar",
	"symbol_native": "MKD",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MKD",
	"name_plural": "Macedonian denari"
}, {
	"symbol": "MMK",
	"name": "Myanma Kyat",
	"symbol_native": "K",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "MMK",
	"name_plural": "Myanma kyats"
}, {
	"symbol": "MOP$",
	"name": "Macanese Pataca",
	"symbol_native": "MOP$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MOP",
	"name_plural": "Macanese patacas"
}, {
	"symbol": "MURs",
	"name": "Mauritian Rupee",
	"symbol_native": "MURs",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "MUR",
	"name_plural": "Mauritian rupees"
}, {
	"symbol": "MX$",
	"name": "Mexican Peso",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MXN",
	"name_plural": "Mexican pesos"
}, {
	"symbol": "RM",
	"name": "Malaysian Ringgit",
	"symbol_native": "RM",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MYR",
	"name_plural": "Malaysian ringgits"
}, {
	"symbol": "MTn",
	"name": "Mozambican Metical",
	"symbol_native": "MTn",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "MZN",
	"name_plural": "Mozambican meticals"
}, {
	"symbol": "N$",
	"name": "Namibian Dollar",
	"symbol_native": "N$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "NAD",
	"name_plural": "Namibian dollars"
}, {
	"symbol": "₦",
	"name": "Nigerian Naira",
	"symbol_native": "₦",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "NGN",
	"name_plural": "Nigerian nairas"
}, {
	"symbol": "C$",
	"name": "Nicaraguan Córdoba",
	"symbol_native": "C$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "NIO",
	"name_plural": "Nicaraguan córdobas"
}, {
	"symbol": "Nkr",
	"name": "Norwegian Krone",
	"symbol_native": "kr",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "NOK",
	"name_plural": "Norwegian kroner"
}, {
	"symbol": "NPRs",
	"name": "Nepalese Rupee",
	"symbol_native": "नेरू",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "NPR",
	"name_plural": "Nepalese rupees"
}, {
	"symbol": "NZ$",
	"name": "New Zealand Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "NZD",
	"name_plural": "New Zealand dollars"
}, {
	"symbol": "OMR",
	"name": "Omani Rial",
	"symbol_native": "ر.ع.‏",
	"decimal_digits": 3,
	"rounding": 0,
	"code": "OMR",
	"name_plural": "Omani rials"
}, {
	"symbol": "B/.",
	"name": "Panamanian Balboa",
	"symbol_native": "B/.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "PAB",
	"name_plural": "Panamanian balboas"
}, {
	"symbol": "S/.",
	"name": "Peruvian Nuevo Sol",
	"symbol_native": "S/.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "PEN",
	"name_plural": "Peruvian nuevos soles"
}, {
	"symbol": "₱",
	"name": "Philippine Peso",
	"symbol_native": "₱",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "PHP",
	"name_plural": "Philippine pesos"
}, {
	"symbol": "PKRs",
	"name": "Pakistani Rupee",
	"symbol_native": "₨",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "PKR",
	"name_plural": "Pakistani rupees"
}, {
	"symbol": "zł",
	"name": "Polish Zloty",
	"symbol_native": "zł",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "PLN",
	"name_plural": "Polish zlotys"
}, {
	"symbol": "₲",
	"name": "Paraguayan Guarani",
	"symbol_native": "₲",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "PYG",
	"name_plural": "Paraguayan guaranis"
}, {
	"symbol": "QR",
	"name": "Qatari Rial",
	"symbol_native": "ر.ق.‏",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "QAR",
	"name_plural": "Qatari rials"
}, {
	"symbol": "RON",
	"name": "Romanian Leu",
	"symbol_native": "RON",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "RON",
	"name_plural": "Romanian lei"
}, {
	"symbol": "din.",
	"name": "Serbian Dinar",
	"symbol_native": "дин.",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "RSD",
	"name_plural": "Serbian dinars"
}, {
	"symbol": "RUB",
	"name": "Russian Ruble",
	"symbol_native": "руб.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "RUB",
	"name_plural": "Russian rubles"
}, {
	"symbol": "RWF",
	"name": "Rwandan Franc",
	"symbol_native": "FR",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "RWF",
	"name_plural": "Rwandan francs"
}, {
	"symbol": "SR",
	"name": "Saudi Riyal",
	"symbol_native": "ر.س.‏",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "SAR",
	"name_plural": "Saudi riyals"
}, {
	"symbol": "SDG",
	"name": "Sudanese Pound",
	"symbol_native": "SDG",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "SDG",
	"name_plural": "Sudanese pounds"
}, {
	"symbol": "Skr",
	"name": "Swedish Krona",
	"symbol_native": "kr",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "SEK",
	"name_plural": "Swedish kronor"
}, {
	"symbol": "S$",
	"name": "Singapore Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "SGD",
	"name_plural": "Singapore dollars"
}, {
	"symbol": "Ssh",
	"name": "Somali Shilling",
	"symbol_native": "Ssh",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "SOS",
	"name_plural": "Somali shillings"
}, {
	"symbol": "SY£",
	"name": "Syrian Pound",
	"symbol_native": "ل.س.‏",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "SYP",
	"name_plural": "Syrian pounds"
}, {
	"symbol": "฿",
	"name": "Thai Baht",
	"symbol_native": "฿",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "THB",
	"name_plural": "Thai baht"
}, {
	"symbol": "DT",
	"name": "Tunisian Dinar",
	"symbol_native": "د.ت.‏",
	"decimal_digits": 3,
	"rounding": 0,
	"code": "TND",
	"name_plural": "Tunisian dinars"
}, {
	"symbol": "T$",
	"name": "Tongan Paʻanga",
	"symbol_native": "T$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "TOP",
	"name_plural": "Tongan paʻanga"
}, {
	"symbol": "TL",
	"name": "Turkish Lira",
	"symbol_native": "TL",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "TRY",
	"name_plural": "Turkish Lira"
}, {
	"symbol": "TT$",
	"name": "Trinidad and Tobago Dollar",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "TTD",
	"name_plural": "Trinidad and Tobago dollars"
}, {
	"symbol": "NT$",
	"name": "New Taiwan Dollar",
	"symbol_native": "NT$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "TWD",
	"name_plural": "New Taiwan dollars"
}, {
	"symbol": "TSh",
	"name": "Tanzanian Shilling",
	"symbol_native": "TSh",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "TZS",
	"name_plural": "Tanzanian shillings"
}, {
	"symbol": "₴",
	"name": "Ukrainian Hryvnia",
	"symbol_native": "₴",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "UAH",
	"name_plural": "Ukrainian hryvnias"
}, {
	"symbol": "USh",
	"name": "Ugandan Shilling",
	"symbol_native": "USh",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "UGX",
	"name_plural": "Ugandan shillings"
}, {
	"symbol": "$U",
	"name": "Uruguayan Peso",
	"symbol_native": "$",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "UYU",
	"name_plural": "Uruguayan pesos"
}, {
	"symbol": "UZS",
	"name": "Uzbekistan Som",
	"symbol_native": "UZS",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "UZS",
	"name_plural": "Uzbekistan som"
}, {
	"symbol": "Bs.F.",
	"name": "Venezuelan Bolívar",
	"symbol_native": "Bs.F.",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "VEF",
	"name_plural": "Venezuelan bolívars"
}, {
	"symbol": "₫",
	"name": "Vietnamese Dong",
	"symbol_native": "₫",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "VND",
	"name_plural": "Vietnamese dong"
}, {
	"symbol": "FCFA",
	"name": "CFA Franc BEAC",
	"symbol_native": "FCFA",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "XAF",
	"name_plural": "CFA francs BEAC"
}, {
	"symbol": "CFA",
	"name": "CFA Franc BCEAO",
	"symbol_native": "CFA",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "XOF",
	"name_plural": "CFA francs BCEAO"
}, {
	"symbol": "YR",
	"name": "Yemeni Rial",
	"symbol_native": "ر.ي.‏",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "YER",
	"name_plural": "Yemeni rials"
}, {
	"symbol": "R",
	"name": "South African Rand",
	"symbol_native": "R",
	"decimal_digits": 2,
	"rounding": 0,
	"code": "ZAR",
	"name_plural": "South African rand"
}, {
	"symbol": "ZK",
	"name": "Zambian Kwacha",
	"symbol_native": "ZK",
	"decimal_digits": 0,
	"rounding": 0,
	"code": "ZMK",
	"name_plural": "Zambian kwachas"
}];


async function addData() {
  for (let i = 0; i < currencyData.length; i++) {
    await pool.query(`INSERT INTO currency_descriptions(currency_name,currency_acronym,symbol,name_plural)VALUES('${currencyData[i].name}','${currencyData[i].code}','${currencyData[i].symbol}','${currencyData[i].name_plural}')`);
  }
}

addData();

/*
{"success":true,"symbols":{"AED":"United Arab Emirates Dirham","AFN":"Afghan Afghani","ALL":"Albanian Lek","AMD":"Armenian Dram","ANG":"Netherlands Antillean Guilder","AOA":"Angolan Kwanza","ARS":"Argentine Peso","AUD":"Australian Dollar","AWG":"Aruban Florin","AZN":"Azerbaijani Manat","BAM":"Bosnia-Herzegovina Convertible Mark","BBD":"Barbadian Dollar","BDT":"Bangladeshi Taka","BGN":"Bulgarian Lev","BHD":"Bahraini Dinar","BIF":"Burundian Franc","BMD":"Bermudan Dollar","BND":"Brunei Dollar","BOB":"Bolivian Boliviano","BRL":"Brazilian Real","BSD":"Bahamian Dollar","BTC":"Bitcoin","BTN":"Bhutanese Ngultrum","BWP":"Botswanan Pula","BYN":"New Belarusian Ruble","BYR":"Belarusian Ruble","BZD":"Belize Dollar","CAD":"Canadian Dollar","CDF":"Congolese Franc","CHF":"Swiss Franc","CLF":"Chilean Unit of Account (UF)","CLP":"Chilean Peso","CNY":"Chinese Yuan","COP":"Colombian Peso","CRC":"Costa Rican Col\u00f3n","CUC":"Cuban Convertible Peso","CUP":"Cuban Peso","CVE":"Cape Verdean Escudo","CZK":"Czech Republic Koruna","DJF":"Djiboutian Franc","DKK":"Danish Krone","DOP":"Dominican Peso","DZD":"Algerian Dinar","EGP":"Egyptian Pound","ERN":"Eritrean Nakfa","ETB":"Ethiopian Birr","EUR":"Euro","FJD":"Fijian Dollar","FKP":"Falkland Islands Pound","GBP":"British Pound Sterling","GEL":"Georgian Lari","GGP":"Guernsey Pound","GHS":"Ghanaian Cedi","GIP":"Gibraltar Pound","GMD":"Gambian Dalasi","GNF":"Guinean Franc","GTQ":"Guatemalan Quetzal","GYD":"Guyanaese Dollar","HKD":"Hong Kong Dollar","HNL":"Honduran Lempira","HRK":"Croatian Kuna","HTG":"Haitian Gourde","HUF":"Hungarian Forint","IDR":"Indonesian Rupiah","ILS":"Israeli New Sheqel","IMP":"Manx pound","INR":"Indian Rupee","IQD":"Iraqi Dinar","IRR":"Iranian Rial","ISK":"Icelandic Kr\u00f3na","JEP":"Jersey Pound","JMD":"Jamaican Dollar","JOD":"Jordanian Dinar","JPY":"Japanese Yen","KES":"Kenyan Shilling","KGS":"Kyrgystani Som","KHR":"Cambodian Riel","KMF":"Comorian Franc","KPW":"North Korean Won","KRW":"South Korean Won","KWD":"Kuwaiti Dinar","KYD":"Cayman Islands Dollar","KZT":"Kazakhstani Tenge","LAK":"Laotian Kip","LBP":"Lebanese Pound","LKR":"Sri Lankan Rupee","LRD":"Liberian Dollar","LSL":"Lesotho Loti","LTL":"Lithuanian Litas","LVL":"Latvian Lats","LYD":"Libyan Dinar","MAD":"Moroccan Dirham","MDL":"Moldovan Leu","MGA":"Malagasy Ariary","MKD":"Macedonian Denar","MMK":"Myanma Kyat","MNT":"Mongolian Tugrik","MOP":"Macanese Pataca","MRO":"Mauritanian Ouguiya","MUR":"Mauritian Rupee","MVR":"Maldivian Rufiyaa","MWK":"Malawian Kwacha","MXN":"Mexican Peso","MYR":"Malaysian Ringgit","MZN":"Mozambican Metical","NAD":"Namibian Dollar","NGN":"Nigerian Naira","NIO":"Nicaraguan C\u00f3rdoba","NOK":"Norwegian Krone","NPR":"Nepalese Rupee","NZD":"New Zealand Dollar","OMR":"Omani Rial","PAB":"Panamanian Balboa","PEN":"Peruvian Nuevo Sol","PGK":"Papua New Guinean Kina","PHP":"Philippine Peso","PKR":"Pakistani Rupee","PLN":"Polish Zloty","PYG":"Paraguayan Guarani","QAR":"Qatari Rial","RON":"Romanian Leu","RSD":"Serbian Dinar","RUB":"Russian Ruble","RWF":"Rwandan Franc","SAR":"Saudi Riyal","SBD":"Solomon Islands Dollar","SCR":"Seychellois Rupee","SDG":"Sudanese Pound","SEK":"Swedish Krona","SGD":"Singapore Dollar","SHP":"Saint Helena Pound","SLL":"Sierra Leonean Leone","SOS":"Somali Shilling","SRD":"Surinamese Dollar","STD":"S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra","SVC":"Salvadoran Col\u00f3n","SYP":"Syrian Pound","SZL":"Swazi Lilangeni","THB":"Thai Baht","TJS":"Tajikistani Somoni","TMT":"Turkmenistani Manat","TND":"Tunisian Dinar","TOP":"Tongan Pa\u02bbanga","TRY":"Turkish Lira","TTD":"Trinidad and Tobago Dollar","TWD":"New Taiwan Dollar","TZS":"Tanzanian Shilling","UAH":"Ukrainian Hryvnia","UGX":"Ugandan Shilling","USD":"United States Dollar","UYU":"Uruguayan Peso","UZS":"Uzbekistan Som","VEF":"Venezuelan Bol\u00edvar Fuerte","VND":"Vietnamese Dong","VUV":"Vanuatu Vatu","WST":"Samoan Tala","XAF":"CFA Franc BEAC","XAG":"Silver (troy ounce)","XAU":"Gold (troy ounce)","XCD":"East Caribbean Dollar","XDR":"Special Drawing Rights","XOF":"CFA Franc BCEAO","XPF":"CFP Franc","YER":"Yemeni Rial","ZAR":"South African Rand","ZMK":"Zambian Kwacha (pre-2013)","ZMW":"Zambian Kwacha","ZWL":"Zimbabwean Dollar"}}
*/
// ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BYR', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMK', 'ZMW', 'ZWL']