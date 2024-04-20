const elements = [
    {
        nazwa: 'wodór',
        rodzaj: 'niemetal',
        masaAtomowa: 1.0078,
        rokOdkrycia: 1766.0,
        okres: 1,
        elektroujemnosc: 2.2,
        wartosciowosc: 1,
    },
    {
        nazwa: 'hel',
        rodzaj: 'gaz szlachetny',
        masaAtomowa: 4.0026,
        rokOdkrycia: 1868.0,
        okres: 1,
        elektroujemnosc: 'brak',
        wartosciowosc: 0,
    },
    {
        nazwa: 'lit',
        rodzaj: 'metal',
        masaAtomowa: 6.941,
        rokOdkrycia: 1817.0,
        okres: 2,
        elektroujemnosc: 1.0,
        wartosciowosc: 1,
    },
    {
        nazwa: 'beryl',
        rodzaj: 'metal',
        masaAtomowa: 9.0122,
        rokOdkrycia: 1797.0,
        okres: 2,
        elektroujemnosc: 1.5,
        wartosciowosc: 2,
    },
    {
        nazwa: 'bor',
        rodzaj: 'półmetal',
        masaAtomowa: 10.811,
        rokOdkrycia: 1808.0,
        okres: 2,
        elektroujemnosc: 2.0,
        wartosciowosc: 2,
    },
    {
        nazwa: 'węgiel',
        rodzaj: 'niemetal',
        masaAtomowa: 12.011,
        rokOdkrycia: 1500.0,
        okres: 2,
        elektroujemnosc: 2.5,
        wartosciowosc: 1,
    },
    {
        nazwa: 'azot',
        rodzaj: 'niemetal',
        masaAtomowa: 14.007,
        rokOdkrycia: 1772.0,
        okres: 2,
        elektroujemnosc: 3.0,
        wartosciowosc: 1,
    },
    {
        nazwa: 'tlen',
        rodzaj: 'niemetal',
        masaAtomowa: 15.999,
        rokOdkrycia: 1774.0,
        okres: 2,
        elektroujemnosc: 3.5,
        wartosciowosc: '2 ',
    },
    {
        nazwa: 'fluor',
        rodzaj: 'niemetal',
        masaAtomowa: 18.998,
        rokOdkrycia: 1886.0,
        okres: 2,
        elektroujemnosc: 4.0,
        wartosciowosc: 1,
    },
    {
        nazwa: 'neon',
        rodzaj: 'gaz szlachetny',
        masaAtomowa: 20.18,
        rokOdkrycia: 1898.0,
        okres: 2,
        elektroujemnosc: 'brak',
        wartosciowosc: 0,
    },
    {
        nazwa: 'sód',
        rodzaj: 'metal',
        masaAtomowa: 22.99,
        rokOdkrycia: 1807.0,
        okres: 3,
        elektroujemnosc: 0.9,
        wartosciowosc: 1,
    },
    {
        nazwa: 'magnez',
        rodzaj: 'metal',
        masaAtomowa: 24.305,
        rokOdkrycia: 1755.0,
        okres: 3,
        elektroujemnosc: 1.2,
        wartosciowosc: 2,
    },
    {
        nazwa: 'glin',
        rodzaj: 'metal',
        masaAtomowa: 26.982,
        rokOdkrycia: 1825.0,
        okres: 3,
        elektroujemnosc: 1.5,
        wartosciowosc: 3,
    },
    {
        nazwa: 'krzem',
        rodzaj: 'półmetal',
        masaAtomowa: 28.086,
        rokOdkrycia: 1824.0,
        okres: 3,
        elektroujemnosc: 1.8,
        wartosciowosc: 4,
    },
    {
        nazwa: 'fosfor',
        rodzaj: 'niemetal',
        masaAtomowa: 30.974,
        rokOdkrycia: 1669.0,
        okres: 3,
        elektroujemnosc: 2.1,
        wartosciowosc: 1,
    },
    {
        nazwa: 'siarka',
        rodzaj: 'niemetal',
        masaAtomowa: 32.065,
        rokOdkrycia: 1400.0,
        okres: 3,
        elektroujemnosc: 2.5,
        wartosciowosc: 2,
    },
    {
        nazwa: 'chlor',
        rodzaj: 'niemetal',
        masaAtomowa: 35.453,
        rokOdkrycia: 1774.0,
        okres: 3,
        elektroujemnosc: 3.0,
        wartosciowosc: 1,
    },
    {
        nazwa: 'argon',
        rodzaj: 'gaz szlachetny',
        masaAtomowa: 39.948,
        rokOdkrycia: 1894.0,
        okres: 3,
        elektroujemnosc: 'brak',
        wartosciowosc: 0,
    },
    {
        nazwa: 'potas',
        rodzaj: 'metal',
        masaAtomowa: 39.098,
        rokOdkrycia: 1807.0,
        okres: 4,
        elektroujemnosc: 0.8,
        wartosciowosc: 1,
    },
    {
        nazwa: 'wapń',
        rodzaj: 'metal',
        masaAtomowa: 40.078,
        rokOdkrycia: 1808.0,
        okres: 4,
        elektroujemnosc: 1.0,
        wartosciowosc: 2,
    },
    {
        nazwa: 'skand',
        rodzaj: 'metal',
        masaAtomowa: 44.956,
        rokOdkrycia: 1879.0,
        okres: 4,
        elektroujemnosc: 1.3,
        wartosciowosc: 3,
    },
    {
        nazwa: 'tytan',
        rodzaj: 'metal',
        masaAtomowa: 47.867,
        rokOdkrycia: 1791.0,
        okres: 4,
        elektroujemnosc: 1.5,
        wartosciowosc: 2,
    },
    {
        nazwa: 'chrom',
        rodzaj: 'metal',
        masaAtomowa: 51.996,
        rokOdkrycia: 1797.0,
        okres: 4,
        elektroujemnosc: 1.9,
        wartosciowosc: 2,
    },
    {
        nazwa: 'mangan',
        rodzaj: 'metal',
        masaAtomowa: 54.938,
        rokOdkrycia: 1774.0,
        okres: 4,
        elektroujemnosc: 1.5,
        wartosciowosc: 2,
    },
    {
        nazwa: 'żelazo',
        rodzaj: 'metal',
        masaAtomowa: 55.845,
        rokOdkrycia: -1800.0,
        okres: 4,
        elektroujemnosc: 1.8,
        wartosciowosc: 2,
    },
    {
        nazwa: 'kobalt',
        rodzaj: 'metal',
        masaAtomowa: 58.933,
        rokOdkrycia: 1735.0,
        okres: 4,
        elektroujemnosc: 1.8,
        wartosciowosc: 2,
    },
    {
        nazwa: 'nikiel',
        rodzaj: 'metal',
        masaAtomowa: 58.693,
        rokOdkrycia: 1751.0,
        okres: 4,
        elektroujemnosc: 1.8,
        wartosciowosc: 2,
    },
    {
        nazwa: 'miedź',
        rodzaj: 'metal',
        masaAtomowa: 63.546,
        rokOdkrycia: -10000.0,
        okres: 4,
        elektroujemnosc: 1.9,
        wartosciowosc: 1,
    },
    {
        nazwa: 'cynk',
        rodzaj: 'metal',
        masaAtomowa: 65.38,
        rokOdkrycia: 1746.0,
        okres: 4,
        elektroujemnosc: 1.6,
        wartosciowosc: 2,
    },
    {
        nazwa: 'gal',
        rodzaj: 'metal',
        masaAtomowa: 69.723,
        rokOdkrycia: 1875.0,
        okres: 4,
        elektroujemnosc: 1.6,
        wartosciowosc: 3,
    },
    {
        nazwa: 'german',
        rodzaj: 'półmetal',
        masaAtomowa: 72.64,
        rokOdkrycia: 1886.0,
        okres: 4,
        elektroujemnosc: 1.8,
        wartosciowosc: 2,
    },
    {
        nazwa: 'arsen',
        rodzaj: 'półmetal',
        masaAtomowa: 74.922,
        rokOdkrycia: 1250.0,
        okres: 4,
        elektroujemnosc: 2.0,
        wartosciowosc: 3,
    },
    {
        nazwa: 'selen',
        rodzaj: 'niemetal',
        masaAtomowa: 78.96,
        rokOdkrycia: 1817.0,
        okres: 4,
        elektroujemnosc: 2.4,
        wartosciowosc: 2,
    },
    {
        nazwa: 'brom',
        rodzaj: 'niemetal',
        masaAtomowa: 79.904,
        rokOdkrycia: 1826.0,
        okres: 4,
        elektroujemnosc: 2.8,
        wartosciowosc: 1,
    },
    {
        nazwa: 'krypton',
        rodzaj: 'gaz szlachetny',
        masaAtomowa: 83.798,
        rokOdkrycia: 1898.0,
        okres: 4,
        elektroujemnosc: 'brak',
        wartosciowosc: 0,
    },
    {
        nazwa: 'rubid',
        rodzaj: 'metal',
        masaAtomowa: 85.468,
        rokOdkrycia: 1861.0,
        okres: 5,
        elektroujemnosc: 0.8,
        wartosciowosc: 1,
    },
    {
        nazwa: 'stront',
        rodzaj: 'metal',
        masaAtomowa: 87.62,
        rokOdkrycia: 1790.0,
        okres: 5,
        elektroujemnosc: 1.0,
        wartosciowosc: 2,
    },
    {
        nazwa: 'itr',
        rodzaj: 'metal',
        masaAtomowa: 88.906,
        rokOdkrycia: 1794.0,
        okres: 5,
        elektroujemnosc: 1.3,
        wartosciowosc: '3 ',
    },
    {
        nazwa: 'wanad',
        rodzaj: 'metal',
        masaAtomowa: 50.942,
        rokOdkrycia: 1801.0,
        okres: 4,
        elektroujemnosc: 1.6,
        wartosciowosc: 2,
    },
    {
        nazwa: 'cyrkon',
        rodzaj: 'metal',
        masaAtomowa: 91.224,
        rokOdkrycia: 1789.0,
        okres: 5,
        elektroujemnosc: 1.4,
        wartosciowosc: 4,
    },
    {
        nazwa: 'ksenon',
        rodzaj: 'gaz szlachetny',
        masaAtomowa: 131.29,
        rokOdkrycia: 1898.0,
        okres: 5,
        elektroujemnosc: 'brak',
        wartosciowosc: 0,
    },
    {
        nazwa: 'radon',
        rodzaj: 'gaz szlachetny',
        masaAtomowa: 222.0,
        rokOdkrycia: 1900.0,
        okres: 6,
        elektroujemnosc: 'brak',
        wartosciowosc: 0,
    },
    {
        nazwa: 'srebro',
        rodzaj: 'metal',
        masaAtomowa: 107.87,
        rokOdkrycia: -500.0,
        okres: 5,
        elektroujemnosc: 1.9,
        wartosciowosc: 1,
    },
    {
        nazwa: 'cyna',
        rodzaj: 'metal',
        masaAtomowa: 118.71,
        rokOdkrycia: -500.0,
        okres: 5,
        elektroujemnosc: 1.9,
        wartosciowosc: 2,
    },
    {
        nazwa: 'jod',
        rodzaj: 'niemetal',
        masaAtomowa: 126.904,
        rokOdkrycia: 1811.0,
        okres: 5,
        elektroujemnosc: 2.7,
        wartosciowosc: 1,
    },
    {
        nazwa: 'wolfram',
        rodzaj: 'metal',
        masaAtomowa: 183.84,
        rokOdkrycia: 1783.0,
        okres: 6,
        elektroujemnosc: 2.4,
        wartosciowosc: 2,
    },
    {
        nazwa: 'platyna',
        rodzaj: 'metal',
        masaAtomowa: 195.084,
        rokOdkrycia: 1735.0,
        okres: 6,
        elektroujemnosc: 2.3,
        wartosciowosc: 2,
    },
    {
        nazwa: 'złoto',
        rodzaj: 'metal',
        masaAtomowa: 196.966,
        rokOdkrycia: -1000.0,
        okres: 6,
        elektroujemnosc: 2.5,
        wartosciowosc: 1,
    },
    {
        nazwa: 'rtęć',
        rodzaj: 'metal',
        masaAtomowa: '200. 592',
        rokOdkrycia: 1000.0,
        okres: 6,
        elektroujemnosc: 2.0,
        wartosciowosc: 1,
    },
    {
        nazwa: 'ołów',
        rodzaj: 'metal',
        masaAtomowa: 207.2,
        rokOdkrycia: -1000.0,
        okres: 6,
        elektroujemnosc: 2.3,
        wartosciowosc: 2,
    },
    {
        nazwa: 'rad',
        rodzaj: 'metal',
        masaAtomowa: 226.0,
        rokOdkrycia: 1898.0,
        okres: 7,
        elektroujemnosc: 0.9,
        wartosciowosc: 2,
    },
    {
        nazwa: 'uran',
        rodzaj: 'metal',
        masaAtomowa: 238.03,
        rokOdkrycia: 1789.0,
        okres: 7,
        elektroujemnosc: 1.4,
        wartosciowosc: 3,
    },
    {
        nazwa: 'neptun',
        rodzaj: 'metal',
        masaAtomowa: 237.0,
        rokOdkrycia: 1940.0,
        okres: 7,
        elektroujemnosc: 1.4,
        wartosciowosc: 3,
    },
    {
        nazwa: 'pluton',
        rodzaj: 'metal',
        masaAtomowa: 244.0,
        rokOdkrycia: 1940.0,
        okres: 7,
        elektroujemnosc: 1.3,
        wartosciowosc: 3,
    },
    {
        nazwa: 'berkel',
        rodzaj: 'metal',
        masaAtomowa: 247.0,
        rokOdkrycia: 1949.0,
        okres: 7,
        elektroujemnosc: 1.3,
        wartosciowosc: 3,
    },
    {
        nazwa: 'ameryk',
        rodzaj: 'metal',
        masaAtomowa: 243.0,
        rokOdkrycia: 1944.0,
        okres: 7,
        elektroujemnosc: 1.3,
        wartosciowosc: 3,
    },
    {
        nazwa: 'tor',
        rodzaj: 'metal',
        masaAtomowa: 232.037,
        rokOdkrycia: 1828.0,
        okres: 7,
        elektroujemnosc: 1.3,
        wartosciowosc: 4,
    },
    {
        nazwa: 'aktyn',
        rodzaj: 'metal',
        masaAtomowa: 227.0,
        rokOdkrycia: 1899.0,
        okres: 7,
        elektroujemnosc: 1.1,
        wartosciowosc: 3,
    },
    {
        nazwa: 'iryd',
        rodzaj: 'metal',
        masaAtomowa: 192.217,
        rokOdkrycia: 1803.0,
        okres: 6,
        elektroujemnosc: 2.2,
        wartosciowosc: 3,
    },
    {
        nazwa: 'neodym',
        rodzaj: 'metal',
        masaAtomowa: 144.242,
        rokOdkrycia: 1885.0,
        okres: 6,
        elektroujemnosc: 1.1,
        wartosciowosc: '3 ',
    },
    {
        nazwa: 'prazeodym',
        rodzaj: 'metal',
        masaAtomowa: 140.907,
        rokOdkrycia: 1885.0,
        okres: 6,
        elektroujemnosc: 1.1,
        wartosciowosc: '3 ',
    },
    {
        nazwa: 'cer',
        rodzaj: 'metal',
        masaAtomowa: 140.116,
        rokOdkrycia: 1803.0,
        okres: 6,
        elektroujemnosc: 1.1,
        wartosciowosc: 3,
    },
    {
        nazwa: 'bar',
        rodzaj: 'metal',
        masaAtomowa: 137.327,
        rokOdkrycia: 1808.0,
        okres: 6,
        elektroujemnosc: 0.9,
        wartosciowosc: 2,
    },
    {
        nazwa: 'antymon',
        rodzaj: 'metal',
        masaAtomowa: 121.76,
        rokOdkrycia: -1000.0,
        okres: 5,
        elektroujemnosc: 2.0,
        wartosciowosc: 3,
    },
    {
        nazwa: 'pallad',
        rodzaj: 'metal',
        masaAtomowa: 106.42,
        rokOdkrycia: 1803.0,
        okres: 5,
        elektroujemnosc: 2.2,
        wartosciowosc: 2,
    },
    {
        nazwa: 'cez',
        rodzaj: 'metal',
        masaAtomowa: 132.905,
        rokOdkrycia: 1860.0,
        okres: 6,
        elektroujemnosc: 0.8,
        wartosciowosc: 1,
    },
    {
        nazwa: 'promet',
        rodzaj: 'metal',
        masaAtomowa: 145.0,
        rokOdkrycia: 1945.0,
        okres: 6,
        elektroujemnosc: 1.1,
        wartosciowosc: 3,
    },
    {
        nazwa: 'terb',
        rodzaj: 'metal',
        masaAtomowa: 158.925,
        rokOdkrycia: 1843.0,
        okres: 6,
        elektroujemnosc: 1.2,
        wartosciowosc: 3,
    },
    {
        nazwa: 'europ',
        rodzaj: 'metal',
        masaAtomowa: 151.965,
        rokOdkrycia: 1901.0,
        okres: 6,
        elektroujemnosc: 'brak',
        wartosciowosc: 2,
    },
    {
        nazwa: 'dysproz',
        rodzaj: 'metal',
        masaAtomowa: 162.5,
        rokOdkrycia: 1886.0,
        okres: 6,
        elektroujemnosc: 1.2,
        wartosciowosc: 3,
    },
];
export default elements;
