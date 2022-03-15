const getSI = (p, n, r) => (p * n * r) / 100;

const getEMI = (p, n, r) => (p + getSI(p, n, r)) / (n * 12);

console.log(getEMI(500000, 3, 12));
