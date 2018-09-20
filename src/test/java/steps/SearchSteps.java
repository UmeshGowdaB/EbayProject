package steps;

import org.fluentlenium.adapter.cucumber.FluentCucumberTest;
import org.fluentlenium.core.annotation.Page;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pages.SearchPage;
import providers.DriverFactory;



public class SearchSteps extends FluentCucumberTest {

    @Page
    private SearchPage searchPage;

    @Before
    public void before(Scenario scenario) {
        super.before(scenario);
    }

    @After
    public void after(Scenario scenario) {
        super.after(scenario);
    }

    @Override
    public WebDriver newWebDriver() {
        return new DriverFactory("chrome").getDriver();
    }

    @Given("^the user is on the home Page$")
    public void the_user_is_on_the_homePage() {
        goTo(searchPage);
    }

    @When("^the user searches for an item \"(.*?)\" adds to the shopping cart$")
    public void the_user_searches_for_an_item_and_adds_to_shopping_cart(String data) {
    	searchPage.searchItems(data);
    	searchPage.selectTopLink();
    	searchPage.addToCart();
    	searchPage.gotoCart();	
    }
    
    @And("^the user again searches for an item \"(.*?)\" adds to the shopping cart$")
    public void the_user_again_searches_for_an_item_and_adds_to_shopping_cart(String data) {
    	searchPage.searchItems(data);
    	searchPage.selectTopLink();
    	searchPage.addToCart();
    	searchPage.cancelProtection();
    }

}


