$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchAndAddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\nI want to be able to add items to cart",
  "id": "",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20392973151,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WHALOSX1ATWG8WN\u0027, ip: \u00272001:8003:244b:8700:60af:596e:8a4d:d0f6%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.2\u0027, java.version: \u002710.0.2\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:193)\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:181)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat providers.DriverFactory.createNewDriverInstance(DriverFactory.java:38)\n\tat providers.DriverFactory.initialize(DriverFactory.java:24)\n\tat providers.DriverFactory.\u003cinit\u003e(DriverFactory.java:19)\n\tat steps.SearchSteps.newWebDriver(SearchSteps.java:35)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter$1.get(FluentTestRunnerAdapter.java:90)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter$1.get(FluentTestRunnerAdapter.java:87)\n\tat org.fluentlenium.adapter.SharedWebDriverContainer$Impl.createDriver(SharedWebDriverContainer.java:81)\n\tat org.fluentlenium.adapter.SharedWebDriverContainer$Impl.getOrCreateDriver(SharedWebDriverContainer.java:72)\n\tat org.fluentlenium.adapter.SharedWebDriverContainer.getOrCreateDriver(SharedWebDriverContainer.java:26)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter.starting(FluentTestRunnerAdapter.java:87)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter.starting(FluentTestRunnerAdapter.java:66)\n\tat org.fluentlenium.adapter.cucumber.FluentCucumberTest.before(FluentCucumberTest.java:27)\n\tat steps.SearchSteps.before(SearchSteps.java:25)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:27621/status] to be available after 20002 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:107)\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:190)\n\t... 65 more\nCaused by: com.google.common.util.concurrent.UncheckedTimeoutException: java.util.concurrent.TimeoutException\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:140)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:80)\n\t... 66 more\nCaused by: java.util.concurrent.TimeoutException\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:128)\n\t... 67 more\n",
  "status": "failed"
});
formatter.before({
  "duration": 20006590014,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WHALOSX1ATWG8WN\u0027, ip: \u00272001:8003:244b:8700:60af:596e:8a4d:d0f6%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.2\u0027, java.version: \u002710.0.2\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:193)\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:181)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat providers.DriverFactory.createNewDriverInstance(DriverFactory.java:38)\n\tat providers.DriverFactory.initialize(DriverFactory.java:24)\n\tat providers.DriverFactory.\u003cinit\u003e(DriverFactory.java:19)\n\tat steps.CartSteps.newWebDriver(CartSteps.java:34)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter$1.get(FluentTestRunnerAdapter.java:90)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter$1.get(FluentTestRunnerAdapter.java:87)\n\tat org.fluentlenium.adapter.SharedWebDriverContainer$Impl.createDriver(SharedWebDriverContainer.java:81)\n\tat org.fluentlenium.adapter.SharedWebDriverContainer$Impl.getOrCreateDriver(SharedWebDriverContainer.java:72)\n\tat org.fluentlenium.adapter.SharedWebDriverContainer.getOrCreateDriver(SharedWebDriverContainer.java:26)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter.starting(FluentTestRunnerAdapter.java:87)\n\tat org.fluentlenium.adapter.FluentTestRunnerAdapter.starting(FluentTestRunnerAdapter.java:66)\n\tat org.fluentlenium.adapter.cucumber.FluentCucumberTest.before(FluentCucumberTest.java:27)\n\tat steps.CartSteps.before(CartSteps.java:24)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:40705/status] to be available after 20003 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:107)\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:190)\n\t... 65 more\nCaused by: com.google.common.util.concurrent.UncheckedTimeoutException: java.util.concurrent.TimeoutException\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:140)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:80)\n\t... 66 more\nCaused by: java.util.concurrent.TimeoutException\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:128)\n\t... 67 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "Search for items on ebay",
  "description": "",
  "id": ";search-for-items-on-ebay",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the user is on the home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user searches for an item \"Dishwasher\" adds to the shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user again searches for an item \"Dryer\" adds to the shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the shopping cart should have both the items present",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.the_user_is_on_the_homePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dishwasher",
      "offset": 31
    }
  ],
  "location": "SearchSteps.the_user_searches_for_an_item_and_adds_to_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Dryer",
      "offset": 37
    }
  ],
  "location": "SearchSteps.the_user_again_searches_for_an_item_and_adds_to_shopping_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CartSteps.the_shopping_cart_should_have_both_the_items_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 103450,
  "status": "passed"
});
formatter.after({
  "duration": 37195,
  "status": "passed"
});
});