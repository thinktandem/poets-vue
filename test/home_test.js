Feature("Home").retry(10);

Before(I => {
  I.amOnPage("/");
});

Scenario("Ad section is available on homepage", I => {
  I.seeElement(".promo");
});

Scenario("Poem-a-day is available on homepage", I => {
  I.seeElement(".daily-poem");
});

Scenario("Donate button is available on homepage", I => {
  I.see('Donate');
});
