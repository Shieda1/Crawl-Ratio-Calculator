// https://calculator.swiftutors.com/crawl-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const crawlRatioRadio = document.getElementById('crawlRatioRadio');
const differentialRadio = document.getElementById('differentialRadio');
const lowTransferCaseRadio = document.getElementById('lowTransferCaseRadio');
const transmissionLowGearRadio = document.getElementById('transmissionLowGearRadio');

let crawlRatio;
let differential = v1;
let lowTransferCase = v2;
let transmissionLowGear = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

crawlRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Differential';
  variable2.textContent = 'Low Transfer Case';
  variable3.textContent = 'Transmission Low Gear';
  differential = v1;
  lowTransferCase = v2;
  transmissionLowGear = v3;
  result.textContent = '';
});

differentialRadio.addEventListener('click', function() {
  variable1.textContent = 'Crawl Ratio';
  variable2.textContent = 'Low Transfer Case';
  variable3.textContent = 'Transmission Low Gear';
  crawlRatio = v1;
  lowTransferCase = v2;
  transmissionLowGear = v3;
  result.textContent = '';
});

lowTransferCaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Crawl Ratio';
  variable2.textContent = 'Differential';
  variable3.textContent = 'Transmission Low Gear';
  crawlRatio = v1;
  differential = v2;
  transmissionLowGear = v3;
  result.textContent = '';
});

transmissionLowGearRadio.addEventListener('click', function() {
  variable1.textContent = 'Crawl Ratio';
  variable2.textContent = 'Differential';
  variable3.textContent = 'Low Transfer Case';
  crawlRatio = v1;
  differential = v2;
  lowTransferCase = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(crawlRatioRadio.checked)
    result.textContent = `Crawl Ratio = ${computeCrawlRatio().toFixed(2)}`;

  else if(differentialRadio.checked)
    result.textContent = `Differential = ${computeDifferential().toFixed(2)}`;

  else if(lowTransferCaseRadio.checked)
    result.textContent = `Low Transfer Case = ${computeLowTransferCase().toFixed(2)}`;

  else if(transmissionLowGearRadio.checked)
    result.textContent = `Transmission Low Gear = ${computeTransmissionLowGear().toFixed(2)}`;
})

// calculation

function computeCrawlRatio() {
  return Number(differential.value) * Number(lowTransferCase.value) * Number(transmissionLowGear.value);
}

function computeDifferential() {
  return Number(crawlRatio.value) / (Number(lowTransferCase.value) * Number(transmissionLowGear.value));
}

function computeLowTransferCase() {
  return Number(crawlRatio.value) / (Number(differential.value) * Number(transmissionLowGear.value));
}

function computeTransmissionLowGear() {
  return Number(crawlRatio.value) / (Number(differential.value) * Number(lowTransferCase.value));
}