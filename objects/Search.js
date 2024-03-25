/* eslint-disable no-undef */
import { CommonPage } from '../utilities/CommonPage';

export class Search extends CommonPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.acceptCookiesButton = 'css=#yDmH0d > c-wiz > div > div > div > div.NIoIEf > div.G4njw > div.AIC7ge > div.CxJub > div.VtwTSb > form:nth-child(2) > div > div > button';
    this.directionIsInEnglish = 'css=#hArJGc';
    this.checkHeaderLanguage = 'css=#modal-dialog > div > div.hoUMge > div > div.yFnP6d > div > div > div > div.yb2Rh';
    this.searchBar = 'css=#searchboxinput';
    this.searchButton = 'css=#searchbox-searchbutton';
    this.destinationTitle = 'css=#QA0Szd > div > div > div.w6VYqd > div:nth-child(2) > div > div.e07Vkf.kA9KIf > div > div > div.TIHn2 > div > div.lMbq3e > div:nth-child(1) > h1';
    this.directionsButton = 'css=#QA0Szd > div > div > div.w6VYqd > div:nth-child(2) > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.Pf6ghf.ecceSd.tLjsW > div.etWJQ.jym1ob.kdfrQc.pChizd.bWQG4d > button';
    this.startingPoint = 'css=#sb_ifc50 > input';
    this.destinationPoint = 'css=#sb_ifc51 > input';
    this.destinationNotPossible = 'css=#QA0Szd > div > div > div.w6VYqd > div:nth-child(2) > div > div.e07Vkf.kA9KIf > div > div > div.hBX6ld.fontBodyMedium > div > div';
    this.destinationInvalid = 'css=body.LoJzbe.keynav-mode-off.highres.screen-mode:nth-child(2) div.vasquette.id-app-container.y2iKwd.eZfyae.cSgCkb.xcUKcd.pane-open-mode div.id-content-container:nth-child(8) div.JLm1tf-bEDTcc-GWbSKc.id-omnibox-container:nth-child(3) div.vasquette-margin-enabled.Hk4XGb.id-omnibox:nth-child(1) div.widget-directions:nth-child(2) div.dp9cUc.Tc0rEd div.KG8wXc.fontBodyMedium:nth-child(4) div.gstl_51.sbdd_a div.sbdd_b:nth-child(1) div.DAdBuc div.sbsb_b div.sbsb_c div.sbse div.sbqs_c > div.f6FIGf';
    this.wrongNameBox = 'xpath=/html/body/div[1]/div[3]/div[8]/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[2]/div[1]/div/div/div/div/div[2]/div/h2';
    this.searchSecondDest = 'css=#directions-searchbox-1 > button.mL3xi';
    this.searchThirdDest = 'css=#directions-searchbox-2 > button.mL3xi';
    this.searchForthDest = 'css=#directions-searchbox-3 > button.mL3xi';
    this.searchFifthDest = 'css=#directions-searchbox-4 > button.mL3xi';
    this.searchSixthDest = 'css=#directions-searchbox-5> button.mL3xi';
    this.searchSeventhDest = 'css=#directions-searchbox-6 > button.mL3xi';
    this.searchEightDest = 'css=#directions-searchbox-7 > button.mL3xi';
    this.searchNinethDest = 'css=#directions-searchbox-8 > button.mL3xi';
    this.searchTenthDest = 'css=#directions-searchbox-9 > button.mL3xi';
    this.driveByCar = 'css=#omnibox-directions > div > div:nth-child(2) > div > div > div > div:nth-child(2) > button';
    this.addDestination = 'css=#omnibox-directions > div > div.JuLCid > button > div.AUkJgf > div';
    this.thirdDestination = 'css=#sb_ifc52 > input';
    this.forthDestination = 'css=#sb_ifc53 > input';
    this.fifthDestination = 'css=#sb_ifc54 > input';
    this.sixthDestination = 'css=#sb_ifc55 > input';
    this.seventhDestination = 'css=#sb_ifc56 > input';
    this.eighthDestination = 'css=#sb_ifc57 > input';
    this.ninethDestination = 'css=#sb_ifc58 > input';
    this.tenthDestination = 'css=#sb_ifc59 > input';
    this.addAnotherNotPossible = 'css=#QA0Szd > div > div > div.w6VYqd > div:nth-child(2) > div > div.e07Vkf.kA9KIf > div > div > div.MlqQ3d.Hk4XGb > button.wZfvfe';
  };
  async languageSetToEnglish() {
    await this.page.locator(this.directionIsInEnglish).click();
    return await this.page.locator(this.directionIsInEnglish).getAttribute('aria-label');
  };
  async getTextForLanguage() {
    return await this.page.locator(this.checkHeaderLanguage).nth(0).innerText();
  };
  async acceptCookies() {
    await this.page.evaluate(() => window.scrollBy(0, 1000));
    if ((await this.page.$(this.acceptCookiesButton)) !== null) {
      await this.page.click(this.acceptCookiesButton);
    };
  };
  async typeDestination(input) {
    await this.page.locator(this.searchBar).type(input);
    await this.page.locator(this.searchButton).click();
  };
  async getTextForTitle() {
    return await this.page.locator(this.destinationTitle).nth(0).innerText();
  };
  async navigateToDestination(inputStartingPoint) {
    await this.page.locator(this.directionsButton).click();
    await this.page.locator(this.startingPoint).type(inputStartingPoint);
    await this.page.locator(this.destinationPoint).click();
    await this.page.locator(this.searchSecondDest).click();
  };
  async navigateByCarToImpossibleDest(inputStartingPointNeg) {
    await this.page.locator(this.directionsButton).click();
    await this.page.locator(this.driveByCar).click();
    await this.page.locator(this.startingPoint).type(inputStartingPointNeg);
    await this.page.locator(this.destinationPoint).click();
    await this.page.locator(this.searchSecondDest).click();
  }
  async getTextForDestination() {
    return await this.page.locator(this.destinationPoint).nth(0).getAttribute('aria-label');
  };
  async getTextForWrongName() {
    return await this.page.locator(this.wrongNameBox).nth(0).innerText();
  }
  async getTextForImpossibleDest() {
    return await this.page.locator(this.destinationNotPossible).nth(0).innerText();
  }
  async maxTenDestinations(input3, input4, input5, input6, input7, input8, input9, input10, input11) {
    await this.page.locator(this.searchSecondDest).click();
    await this.page.locator(this.driveByCar).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.thirdDestination).type(input3);
    await this.page.locator(this.searchThirdDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.forthDestination).type(input4);
    await this.page.locator(this.searchForthDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.fifthDestination).type(input5);
    await this.page.locator(this.searchFifthDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.sixthDestination).type(input6);
    await this.page.locator(this.searchSixthDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.seventhDestination).type(input7);
    await this.page.locator(this.searchSeventhDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.eighthDestination).type(input8);
    await this.page.locator(this.searchEightDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.ninethDestination).type(input9);
    await this.page.locator(this.searchNinethDest).click();
    await this.page.locator(this.addDestination).click();
    await this.page.locator(this.tenthDestination).type(input10);
    await this.page.locator(this.searchTenthDest).click();
  };
  async getTextForAddDestination() {
    return await this.page.locator(this.addAnotherNotPossible).nth(0).getAttribute('aria-label');
  };
};



