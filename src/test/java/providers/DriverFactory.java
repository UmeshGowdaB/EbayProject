package providers;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class DriverFactory {

	protected WebDriver driver;
	protected DesiredCapabilities capabilities;

	public DriverFactory(String browser) {
		initialize(browser);
	}

	public void initialize(String browser) {
		if (driver == null)
			createNewDriverInstance(browser);
	}

	private void createNewDriverInstance(String browser) {
		String nodeURL = "http://localhost:5555/wd/hub";
		WebDriver driver = null;

		// Browsers
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", "src/test/java/lib/chromedriver");
			HashMap<String, Object> chromeOptions = new HashMap<String, Object>();
			chromeOptions.put("binary", "/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome");
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
			driver = new ChromeDriver();
		}
		if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "src/test/java/lib/geckodriver");
			driver = new FirefoxDriver();
		}

		try {
			driver = new RemoteWebDriver(new URL(nodeURL), capabilities);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	public WebDriver getDriver() {
		return driver;
	}

	public void destroyDriver() {
		driver.quit();
		driver = null;
	}

}
