const unitCheck = document.querySelector('[data-check]');
const unitSi = document.querySelector('[data-si]');
const unit = document.querySelector('[data-unit]');
const temp = document.querySelector('[data-temp]');

const toggleUnit = () => {
  if (unitCheck.checked === true) {
    unitSi.innerHTML = '';
    unitSi.innerHTML = 'Metric';
    let fValue = parseFloat(temp.innerHTML);
    fValue = ((fValue * 9) / 5 + 32).toPrecision(2);
    unit.innerHTML = '';
    temp.innerHTML = `${fValue}&#8457;`;
  } else {
    let cValue = parseFloat(temp.innerHTML);
    cValue = (((cValue - 32) * 5) / 9).toPrecision(2);
    temp.innerHTML = cValue;
    unit.innerHTML = '&deg;C';
    unitSi.innerHTML = 'Imperial';
  }
};

const unitConv = () => {
  unitCheck.addEventListener('change', () => {
    toggleUnit();
  });
};

export default unitConv;
