package pages;

import org.fluentlenium.core.domain.FluentWebElement;
import org.openqa.selenium.support.FindBy;
import providers.PageUtils;

import static org.fluentlenium.assertj.FluentLeniumAssertions.*;



public class CartPage extends PageUtils {
    
	
	
    public static String itemsName;
	
	@FindBy(css="#gh-cart-i")
	private FluentWebElement cart;
	
	@FindBy(css="div[class=\"listsummary-content\"]")
	private FluentWebElement cartItemOne;

    @Override
    public void isAt() {
        assertThat(window().title()).contains("Shopping cart");
    }
    
    public void viewCart() {
		cart.click();
	}
	
	public void validateCartItemOneName() {
		itemsName = cartItemOne.text();
		if (!itemsName.contains("NEW DISHWASHER ELECTRIC AUTOMATIC 60CM STAINLESS STEEL")) {
			System.out.println("ItemOne is not present");
		};
 	}
	
	
	public void validateCartItemTwoName() {
		itemsName = cartItemOne.text();
		if (!itemsName.contains("Brand New Brilcon 7KG Vented Dryer 8 Program with Wall Mount Kit Tumble Clothes")) {
			System.out.println("ItemTwo is not present");
		};
 	}

}