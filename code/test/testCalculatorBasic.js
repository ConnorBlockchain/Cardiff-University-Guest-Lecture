const calculatorBasic = artifacts.require('./calculatorBasic.sol');
const AssertRevert = require('../helpers/AssertRevert.js');

contract('testCalculator.js', function(accounts) {

  let result = 1;

	describe('Deploy Contracts', () => {
		it('Grab needed deployed contracts', async () => {
			this.calculator = await calculatorBasic.new();
		});
		it('Constructor initialized result == 1', async () => {
			assert.equal(await this.calculator.result(), result);
		});
    it('function - getResult() == 1', async () => {
        assert.equal(await this.calculator.getResult(), result);
    });
	});

  describe('Functions', () => {
		it('Add 1 - addToNumber()', async () => {
      await this.calculator.addToNumber(1)
      assert.equal(await this.calculator.result(), result+1);
		});
    it('sub 1 - substractNumber()', async () => {
      await this.calculator.substractNumber(1);
      assert.equal(await this.calculator.result(), result);
		});
    it('mul 2 - multiplyWithNumber()', async () => {
      await this.calculator.multiplyWithNumber(2);
        assert.equal(await this.calculator.result(), result*2);
    });
    it('div 2 - divideByNumber()', async () => {
        await this.calculator.divideByNumber(2);
        assert.equal(await this.calculator.result(), result);
    });
	});
});
