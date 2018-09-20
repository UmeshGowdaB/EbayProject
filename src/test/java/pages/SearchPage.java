package pages;

import static org.assertj.core.api.Assertions.assertThat;
import org.fluentlenium.core.domain.FluentWebElement;
import org.openqa.selenium.support.FindBy;

import config.Configuration;
import providers.PageUtils;

public class SearchPage extends PageUtils{
    
	private String baseURL = Configuration.baseurl;
	
    String itemName;
	
	@FindBy(xpath="/html//input[@id='gh-ac']")
	private FluentWebElement headerSearch;
	
	@FindBy(css="[type='submit']")
	private FluentWebElement submitSearch;
	
	@FindBy(css="#srp-river-results-listing1 .s-item__link")
	private FluentWebElement firstItemlink;
	
	@FindBy(css=".u-cb:nth-of-type(4) a")
	private FluentWebElement addToCart;
	
	@FindBy(css=".app-atc-layer-redesign-content-wrapper .app-atc-layer__actionRow:nth-of-type(2) .btn-scnd")
	private FluentWebElement goToCart;
	
	
	@FindBy(css="div[role=\"dialog\"] div[class=\"addonBtn\"] button[class*=\"close-button\"]")
	private FluentWebElement noProtectionPlan;
	
	
	@FindBy(xpath="/html//div[@id='atcRedesignId_overlay-atc-container']/div[@class='atc-layer-wrapper']//div[@role='button']")
	private FluentWebElement closeDialog;

    @Override
    public String getUrl() {
        return baseURL;
    }
	
    @Override
    public void isAt() {
        assertThat(window().title()).contains("Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay");
    }
    
    public void searchItems(String item) {
		headerSearch.fill().with(item);
		submitSearch.click();
		waitForElementVisible(firstItemlink);
	}
	
	public String selectTopLink() {
		itemName = firstItemlink.text();
		firstItemlink.click();
		waitForElementVisible(addToCart);
		return itemName;
	}	
	
	public void addToCart() {
		addToCart.click();
		waitForElementVisible(goToCart);
		//closeDialog.click();		
	}

	public void gotoCart() {
		goToCart.click();
	}

	
	public void cancelProtection() {
		noProtectionPlan.click();
	}

}
