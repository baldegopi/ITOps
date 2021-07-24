import { When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { ProjectListingPage } from "../../PageObjects/ProjectListing";
import { AlertsPage } from "../../PageObjects/AlertsPage";
var EC = browser.ExpectedConditions;
var expect = chai.expect;
var TestProjectName;
let objProjectListing = new ProjectListingPage();
let objAlerts = new AlertsPage();
var testAlertState;
var testSource;

When('{string} enters project name in project search field {string}', async function (userRole, ProjectName) {
  try {
    await objProjectListing.Project_search(ProjectName);
    TestProjectName = ProjectName
    await browser.sleep(5000);
  }
  catch (error) {
    throw "user not able to search for the project"
  }
});



When('{string} clicks on project name', async function (userRole) {
  try {

    await objProjectListing.selectProject(TestProjectName);

  } catch (error) {
    throw ""
  }

});



When('{string} navigate to alert console', async function (userRole) {
  try {
    await objAlerts.selectAlerts();
  } catch (error) {
    throw ""
  }
});

//Verifying the ITOps admin is able to save and apply the filter

When('{string} clicks on advanced filter icon', async function (userRole) {
  try {
   await browser.wait(EC.invisibilityOf(element(by.className('smo-progress-spinner-circle'))), 50000);

    await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="Saved Filter"]'))), 10000);

    await browser.sleep(5000);
    await objAlerts.AdvanceFilter();
    await browser.sleep(5000);
  } catch (error) {
    throw ""
  }
});



When('{string} enters source as {string} and alert state as {string}', async function (userRole, Source, AlertState) {
  try {
    await browser.wait(EC.visibilityOf(element(by.xpath('//h3[text()="Advanced Filters"]'))), 10000);
    await browser.wait(EC.visibilityOf(element(by.xpath('//h4[text()="Source and Resources"]'))), 10000);

    await objAlerts.SelectSource(Source);
    await objAlerts.AlertState(AlertState);
    testSource = Source;
    testAlertState = AlertState;
  } catch (error) {
    throw ""
  }
});



When('{string} clicks on Save filter button', async function (userRole) {
  try {
    await objAlerts.SaveFilter();
  } catch (error) {
    throw ""
  }
});



When('{string} enters filter name as {string} and Description as {string}', async function (userRole, FilterName, FilterDescription) {
  try {
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
      await objAlerts.FilterName(FilterName);
      await objAlerts.FilterDescription(FilterDescription)
    })
  } catch (error) {
    throw ""
  }

});



When('{string} clicks on save and apply button', async function (userRole) {
  try {
    await objAlerts.Save_Apply();
  } catch (error) {
    throw ""
  }
});



Then('Success message should be disaplayed as toaster {string}', async function (Toster) {
  try {
    await browser.wait(EC.visibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);

    await element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm')).getText().then(function (text) {
      expect(text).to.include(Toster);
    });
    await browser.wait(EC.invisibilityOf(element(by.className('smo-toast-detail smo-toast-message-text-sm smo-toast-detail-sm'))), 100000);
  } catch (error) {
    throw ""
  }
});

// Verifying ITOps admin is able to apply the saved filter again

When('{string} Clicks on Saved Filter from advanced filter section {string}', async function (userRole, SavedFilter) {
  try {
    await browser.sleep(5000);
    await objAlerts.savedFileterTitle(SavedFilter);
    var elm = element(by.xpath('//h3[text()="Saved Filters"]//following::h3[@class="main-heading"]'));
    elm.isPresent().then(res => {
    })
  } catch (error) {
    throw ""
  }

});


Then('verify Apply and cancel buttons should be present', async function () {
  try {

  } catch (error) {
    throw ""
  }
  await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)').then(async function () {
    await browser.wait(EC.visibilityOf(element(by.xpath('//span[text()="Apply"]'))), 10000);
  })
  var elm = element(by.xpath('//span[text()="Apply"]'));
  await elm.isPresent().then(res => {
  })
  var elm = element(by.xpath('//span[text()="Cancel"]'));
  await elm.isPresent().then(res => {
  })
});


Then('Verify the filter conditions are retrieved and click on Apply', async function () {
  try {

    await browser.sleep(5000);
    await objAlerts.Apply();

  } catch (error) {
    throw ""
  }
});
Then('verify Data shown should be based on the filter conditions {string}', async function (Source) {
  await browser.wait(EC.visibilityOf(element(by.className('filter smo smo-filter'))), 10000);
  await browser.wait(EC.visibilityOf(element(by.xpath('//label[text()="Saved Filter"]'))), 10000);

  await element(by.xpath('//span[text()="Alert Name"]//following::td[8]//span')).getText().then(function (text) {
    expect(text).to.include(Source);
  });
});


When('{string} clicks on saved filters {string}', async function (string, SavedFilter) {
  try {
    await browser.sleep(5000);
    await objAlerts.selectSavedFilterFromAlertConsole(SavedFilter);
  } catch (error) {
    throw ""
  }
});

// Alert console UI should show all filter conditions as chips 

Then('verify Remove all link should be present', async function () {
  try {
    var myElement = element(by.xpath('//a[text()="Remove All"]'));
    myElement.isPresent().then(async function (elm) {
     if (elm) {
      console.log("... Element was found")

    } else {
       console.log("... Element was not found")
       throw console.error();
    }
      
    });
  } catch (error) {
    throw ""
  }
});
Then('Chips should have a close button', async function () {

  try {
    var elm = element(by.className('smo smo-close-black-alt filter-result-icon-sm'));
    await elm.isPresent().then(res => {
    })
  } catch (error) {
    throw ""
  }
})

// Verify user is able to remove all filter conditions via alert console once applied

When('{string} clicks on Remove all link next to the chips displayed from Alert console', async function (userRole) {
  try {
    await browser.sleep(2000)
    await objAlerts.selectRemoveAllConditions();
  } catch (error) {
    throw ""
  }
});



Then('verify data should be reset to default set wihtout any filter applied {string}', async function (testSource) {
 
  var myElement = element(by.xpath('//span[text()="No data available"]'));
  myElement.isPresent().then(async function (elm) {
    if (elm) {
     
    } else {
      await objAlerts.Alert_Search(testSource);
    }
  });
});

Then('verify All filter condition chips should be removed from UI', async function () {
  try {
    await browser.sleep(3000)

    var myElement = element(by.className('smo smo-close-black-alt filter-result-icon-sm'));
    myElement.isPresent().then(function (elm) {
      
      if (elm) {
        console.log("... Element was found")
        throw console.error();
      } else {
        console.log("... Element was not found")
      }
    });
  } catch (error) {
    throw ""
  }

});
Then('Saved filter drop down should not show the filter name', async function () {
  try {
    var myElement = element(by.xpath('//label[text()="Saved Filter"]'));
    myElement.isPresent().then(function (elm) {
      if (elm) {
        console.log("... Element was found")
       
      } else {
        console.log("... Element was not found")
        throw console.error();
      }

    });
  } catch (error) {
    throw ""
  }

});
// Verify user is able to remove any filter conditions via alert console once applied

When('{string} clicks on close button from any of the chip displayed', async function (userRole) {
  try {
    await objAlerts.removeSourceCondition();
    await objAlerts.removeStateCondition();
  } catch (error) {
    throw ""
  }
});

Then('closed chips should not be displayed in UI', async function () {
  try {

  } catch (error) {
    throw ""
  }
});

// Saved filters availability

Then('verify all saved filters are displayed on left side {string}', async function (FIlterName) {
  try {
    await objAlerts.savedFileterTitle(FIlterName);
  } catch (error) {
    throw ""
  }
});



Then('filter name, description and Created time should be displayed {string}, {string}, {string}', async function (FIlterName, Description, CreatedTime) {
  try {
    await browser.sleep(5000);
    await element(by.xpath('//span[text()="' + FIlterName + '"]')).getText().then(async function (textFIlterName) {
      await expect(textFIlterName).to.include(FIlterName);
      await console.log(textFIlterName)
    });
    await element(by.xpath('//div[text()="' + Description + '"]')).getText().then(async function (textDescription) {
      await expect(textDescription).to.include(Description);
      await console.log(textDescription)
    });
    await element(by.xpath('//b[text()="' + CreatedTime + ' "]')).getText().then(async function (textCreatedTime) {
      await expect(textCreatedTime).to.include(CreatedTime);
      await console.log(textCreatedTime)
    });
  } catch (error) {
    throw ""
  }
});


Then('verify filter name, description and Created time should be displayed {string}, {string}, {string}', async function (FIlterName, Description, CreatedTime) {
  try {
    await browser.sleep(5000);
    await element(by.xpath('//span[text()="' + FIlterName + '"]')).getText().then(async function (textFIlterName) {
      await expect(textFIlterName).to.include(FIlterName);
      await console.log(textFIlterName)
    });
    await element(by.xpath('//div[text()="' + Description + '"]')).getText().then(async function (textDescription) {
      await expect(textDescription).to.include(Description);
      await console.log(textDescription)
    });
    await element(by.xpath('//b[text()="' + CreatedTime + ' "]')).getText().then(async function (textCreatedTime) {
      await expect(textCreatedTime).to.include(CreatedTime);
      await console.log(textCreatedTime)
    });
  } catch (error) {
    throw ""
  }
});



Then('verify Expand button should be present for each saved filter', function () {
  try {
    var myElement = element(by.className('smo-accordion-toggle-icon smo smo-expand-more-alt chevron-icon smo-accordion-toggle-icon-sup-mon'));
    myElement.isPresent().then(function (elm) {
      if (elm) {
        console.log("... Element was found")

      } else {
        console.log("... Element was not found")
      }

    });
  } catch (error) {
    throw ""
  }

});



Then('verify Number of saved filters and filter Name should be same as advanced filter list of saved filters', function () {
  try {

  } catch (error) {
    throw ""
  }
});