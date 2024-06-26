import getBudgetObject from "./7-getBudgetObject.js";

function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  /**
   * TODO: reorginixe the code when am back
   */
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

export default getFullBudgetObject;
