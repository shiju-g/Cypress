describe("superhero app", () => {
  it("start testing", () => {
    cy.visit("https://career.lifology.com/login/");
    cy.get("input#phone").type("9999999905");
    cy.wait(2000);
    cy.get("button[class='absolute text-purple-900 lg:right-5']").click();
    cy.wait(1500);
    cy.get("input#one").type("1");
    cy.get("input#two").type("2");
    cy.get("input#three").type("3");
    cy.get("input#four").type("4");
    cy.get("input#five").type("5");
    cy.get("input#six").type("6");

    cy.wait(1000);

    // cy.url().then((url) => {
    //   if (url !== "https://career.lifology.com/gateway/") {
    //     cy.log("url not valid");
    //     cy.get("input[type='text']").type("cypress testing");
    //     cy.get("button[type='button']").first().click();
    //     cy.get(
    //       "li[class='text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4']"
    //     )
    //       .last()
    //       .click();

    //     cy.get(
    //       "button[class='py-3 mt-5 font-bold text-white bg-purple-900 px-7 rounded-xl hover:bg-purple-800 focus:outline-none focus:shadow-outline min-w-6 min-h-min']"
    //     )
    //       .should("have.text", "Save")
    //       .click();

    //     cy.get(
    //       "input[class='w-11/12 py-4 text-sm text-center text-purple-900 uppercase md:w-6/12 rounded-xl ']"
    //     ).type("SHIJU");

    //     cy.get(
    //       "button[class='flex justify-center w-40 px-4 py-2 mx-auto mt-0 text-white duration-200 rounded-xl bg-purple-900 hover:scale-x-105']"
    //     )
    //       .should("have.text", "Activate")
    //       .click();

    //     cy.get(
    //       "a[class='flex justify-between px-5 py-3 mt-5 font-bold text-white duration-200 bg-purple-700 border cursor-pointer hover:scale-x-105 rounded-xl']"
    //     ).click();
    //   }
    //   if (url == "https://career.lifology.com/gateway/") {
    //     cy.log("url not valid");
    //     cy.get("input[type='text']").type("cypress testing");
    //     cy.get("button[type='button']").first().click();
    //     cy.get(
    //       "li[class='text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4']"
    //     )
    //       .last()
    //       .click();

    //     cy.get(
    //       "button[class='py-3 mt-5 font-bold text-white bg-purple-900 px-7 rounded-xl hover:bg-purple-800 focus:outline-none focus:shadow-outline min-w-6 min-h-min']"
    //     )
    //       .should("have.text", "Save")
    //       .click();

    //     cy.get(
    //       "input[class='w-11/12 py-4 text-sm text-center text-purple-900 uppercase md:w-6/12 rounded-xl ']"
    //     ).type("SHIJU");

    //     cy.get(
    //       "button[class='flex justify-center w-40 px-4 py-2 mx-auto mt-0 text-white duration-200 rounded-xl bg-purple-900 hover:scale-x-105']"
    //     )
    //       .should("have.text", "Activate")
    //       .click();

    //     cy.get(
    //       "a[class='flex justify-between px-5 py-3 mt-5 font-bold text-white duration-200 bg-purple-700 border cursor-pointer hover:scale-x-105 rounded-xl']"
    //     ).click();
    //   }
    // });

    // cy.get("div[class='absolute top-0 w-full h-full bg-center bg-no-repeat']")
    //   .first()
    //   .click({ force: true });

    cy.wait(1500);

    let levelCount;

    // for (levelCount = 0; levelCount <= 3; levelCount++) {
    //   if (levelCount == 0) {
    //     cy.log(levelCount);
    //     cy.get(
    //       "button[class='w-full p-2 font-bold text-white duration-200 shadow-lg bg-lime-600 font-grand rounded-xl hover:bg-lime-400']"
    //     ).then(($done) => {
    //       cy.get(
    //         "button[class='w-full p-2 font-bold text-white duration-200 shadow-lg bg-lime-600 font-grand rounded-xl hover:bg-lime-400']"
    //       )
    //         .should("have.text", "OKAY, done!")
    //         .click();
    //     });
    //   }

    //   if (levelCount == 1) {
    //     cy.log(levelCount);
    //     cy.get("div[class='swiper-slide']").eq(levelCount).click();
    //     cy.get(
    //       "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
    //     ).type("LIFO46384");
    //     cy.get("button[id='btnSearch']").should("have.text", "Go").click();

    //     cy.wait(16000);

    //     cy.get(
    //       "button[class='absolute top-0 flex justify-center h-10 px-3 py-2 my-5 font-medium text-white border border-transparent rounded-md right-4 md:right-52 w-15 bg-buddyLight hover:bg-buddyDark focus:outline-none focus:ring-2 focus:ring-buddyLight focus:ring-offset-2']"
    //     )
    //       .should("have.text", "SKIP")
    //       .click();
    //   }

    //   if (levelCount == 2) {
    //     cy.log(levelCount);
    //     cy.wait(6000);
    //     cy.get("div[class='swiper-slide swiper-slide-next']").click();

    //     cy.wait(1000);

    //     cy.get(
    //       "button[class='w-full p-2 font-bold text-white duration-200 shadow-lg bg-lime-600 font-grand rounded-xl hover:bg-lime-400']"
    //     )
    //       .should("have.text", "OKAY, done!")
    //       .click();
    //   }

    //   if (levelCount == 3) {
    //     cy.log(levelCount, "level count for last step");
    //     cy.get("div[class='swiper-slide']").last().click();
    //     cy.get(
    //       "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
    //     ).type("LIFO47868");
    //     cy.get("button[id='btnSearch']").should("have.text", "Go").click();
    //     cy.wait(4000);
    //     cy.get("button")
    //       .should("have.text", "Yay!")
    //       .click({ multiple: true, force: true });
    //   }

    //   cy.reload();
    // }

    cy.wait(3000);

    cy.get("[class='swiper-slide']").then(($slides) => {
      let outboxCount = 0;
      for (outboxCount = 0; outboxCount <= 7; outboxCount++) {
        // if (outboxCount == 0) {
        //   cy.log("level two count", outboxCount);
        // }
        // if (outboxCount == 1) {
        //   cy.log("level two count", outboxCount);
        //   cy.get("[class='swiper-slide swiper-slide-next']").click();

        //   {
        //     ("inner steps");
        //   }
        //   let innerboxCount = 0;
        //   for (innerboxCount = 0; innerboxCount <= 3; innerboxCount++) {
        //     if (innerboxCount === 0) {
        //       cy.log("inner box count", innerboxCount);
        //       cy.wait(5000);
        //       cy.get("button").should("have.text", "OKAY, done!").click();
        //     }

        //     if (innerboxCount === 1) {
        //       cy.log("inner box count", innerboxCount);
        //       cy.wait(3000);
        //       cy.get("[class='swiper-slide swiper-slide-active']").click();
        //       cy.wait(2000);
        //       cy.get(
        //         "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
        //       ).type("LIFO64385");
        //       cy.get("button[id='btnSearch']")
        //         .should("have.text", "Go")
        //         .click();
        //       cy.wait(18000);
        //       cy.get(
        //         "button[class='absolute top-0 flex justify-center h-10 px-3 py-2 my-5 font-medium text-white border border-transparent rounded-md right-4 md:right-52 w-15 bg-buddyLight hover:bg-buddyDark focus:outline-none focus:ring-2 focus:ring-buddyLight focus:ring-offset-2']"
        //       )
        //         .should("have.text", "SKIP")
        //         .click();
        //       cy.wait(2000);
        //     }

        //     if (innerboxCount === 2) {
        //       cy.log("inner box count", innerboxCount);
        //       cy.wait(3000);
        //       cy.get("button").should("have.text", "OKAY, done!").click();
        //     }

        //     if (innerboxCount === 3) {
        //       cy.log("inner box count", innerboxCount);
        //       cy.wait(3000);
        //       cy.get("[class='swiper-slide']").click();
        //       cy.get(
        //         "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
        //       ).type("LIFO93840");
        //       cy.get("button[id='btnSearch']")
        //         .should("have.text", "Go")
        //         .click();
        //       cy.wait(7000);
        //       cy.get("button")
        //         .should("have.text", "Yay!")
        //         .click({ multiple: true, force: true });
        //     }
        //   }
        // }

        // if (outboxCount === 2) {
        //   cy.log("Outbox count", outboxCount);
        //   cy.wait(3000);
        //   cy.get("[class='swiper-slide']").first().click();
        //   cy.wait(3000);
        //   cy.get("[class='swiper-slide']").then(($inner2Cards) => {
        //     let innerboxCount = 0;
        //     for (innerboxCount = 0; innerboxCount <= 5; innerboxCount++) {
        //       if (innerboxCount === 0) {
        //         cy.log("inner card one");
        //         cy.get(
        //           "button[class='w-full p-2 font-bold text-white duration-200 shadow-lg bg-lime-600 font-grand rounded-xl hover:bg-lime-400']"
        //         )
        //           .should("have.text", "OKAY, done!")
        //           .click();
        //       }

        //       if (innerboxCount === 1) {
        //         cy.wait(1000);
        //         cy.get("[class='swiper-slide swiper-slide-next']").click();
        //         cy.wait(2000);
        //         cy.get(
        //           "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
        //         ).type("LIFO75269");
        //         cy.get("button[id='btnSearch']")
        //           .should("have.text", "Go")
        //           .click();
        //         cy.wait(18000);
        //         cy.get(
        //           "button[class='absolute top-0 flex justify-center h-10 px-3 py-2 my-5 font-medium text-white border border-transparent rounded-md right-4 md:right-52 w-15 bg-buddyLight hover:bg-buddyDark focus:outline-none focus:ring-2 focus:ring-buddyLight focus:ring-offset-2']"
        //         )
        //           .should("have.text", "SKIP")
        //           .click();
        //       }

        //       if (innerboxCount === 2) {
        //         cy.log(innerboxCount, "card count");
        //         cy.wait(1500);
        //         cy.get(
        //           "button[class='w-full p-2 font-bold text-white duration-200 shadow-lg bg-lime-600 font-grand rounded-xl hover:bg-lime-400']"
        //         )
        //           .should("have.text", "OKAY, done!")
        //           .click();
        //       }

        //       if (innerboxCount === 3) {
        //         cy.log(innerboxCount, "code contain");
        //         cy.wait(1000);
        //         cy.get("[class='swiper-slide swiper-slide-next']").click();
        //         cy.wait(2000);
        //         cy.get(
        //           "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
        //         ).type("LIFO94720");
        //         cy.get("button[id='btnSearch']")
        //           .should("have.text", "Go")
        //           .click();
        //         cy.wait(4000);
        //         cy.url(
        //           "https://career.lifology.com/career_explorer/job_families/"
        //         ).should(
        //           "equal",
        //           "https://career.lifology.com/career_explorer/job_families/"
        //         );
        //         cy.visit("https://career.lifology.com/dashboard/level/3/");
        //       }

        //       if (innerboxCount === 4) {
        //         cy.log("inner card count", innerboxCount);
        //         cy.wait(1000);
        //         cy.get("[class='swiper-slide']").last().click();
        //         cy.wait(1000);
        //         cy.get(
        //           "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
        //         ).type("LIFO46329");
        //         cy.get("button[id='btnSearch']")
        //           .should("have.text", "Go")
        //           .click();
        //         cy.wait(5000);
        //         cy.visit("https://career.lifology.com/dashboard/");
        //       }
        //     }
        //   });
        // }

        if (outboxCount === 3) {
          cy.log("Outbox count", outboxCount);
          cy.wait(3000);
          cy.get("[class='swiper-slide']").eq(1).click();
          cy.wait(1000);
          let innerboxCount = 0;
          for (innerboxCount = 0; innerboxCount <= 5; innerboxCount++) {
            // if (innerboxCount === 0) {
            //   cy.log("innerboxCount", innerboxCount);
            //   cy.get(
            //     "button[class='w-full p-2 font-bold text-white duration-200 shadow-lg bg-lime-600 font-grand rounded-xl hover:bg-lime-400']"
            //   )
            //     .should("have.text", "OKAY, done!")
            //     .click();
            // }

            // if (innerboxCount === 1) {
            //   cy.log("innerboxCount", innerboxCount);
            //   cy.wait(2000);
            //   cy.get("[class='swiper-slide swiper-slide-next']").click();
            //   cy.get(
            //     "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
            //   ).type("LIFO24718");
            //   cy.get("button[id='btnSearch']")
            //     .should("have.text", "Go")
            //     .click();
            //   cy.wait(3000);
            //   cy.get(
            //     "[class='px-4 py-3 font-medium text-center text-white transition border border-transparent rounded-lg shadow-sm cursor-pointer hover:scale-105 w-72 bg-buddyLight focus:outline-none hover:bg-buddyDark hover:shadow-xl']"
            //   ).click();

            //   cy.wait(2000);
            //   let value;

            //   for (value = 1; value <= 20; value++) {
            //     cy.wait(3000);
            //     cy.get(
            //       "button[class='px-4 py-3 mb-20 font-medium text-white transition border border-transparent rounded-lg shadow-sm cursor-pointer md:mb-0 hover:scale-105 w-72 bg-buddyLight focus:outline-none hover:bg-buddyDark hover:shadow-xl']"
            //     )
            //       .should("have.text", "Next")
            //       .click();
            //     cy.wait(1000);
            //   }
            //   cy.get(
            //     "a[class='px-4 py-2 mx-auto font-medium text-white duration-300 cursor-pointer hover:scale-x-105 rounded-xl w-fit bg-buddyDark']"
            //   ).click();

            //   cy.wait(2000);
            //   cy.get(
            //     "a[class='px-4 py-3 font-medium text-center text-white transition border border-transparent rounded-lg shadow-sm cursor-pointer hover:scale-105 w-72 bg-buddyLight focus:outline-none hover:bg-buddyDark hover:shadow-xl']"
            //   ).click();

            //   cy.get(".mb-3.cursor-pointer")
            //     .its("length")
            //     .then(($buttonCount) => {
            //       let mio;
            //       for (mio = 1; mio <= 48; mio++) {
            //         const randomIndex = Math.floor(
            //           Math.random() * $buttonCount
            //         );

            //         cy.get(".mb-3.cursor-pointer")
            //           .eq(randomIndex)
            //           .click({ force: true });

            //         cy.wait(1500);

            //         if (mio !== 49) {
            //           cy.get(
            //             "[class='py-3 font-medium text-white border border-transparent rounded-lg shadow-sm cursor-pointer px-14 bg-purple-500 focus:outline-none hover:bg-purple-600']"
            //           ).click({ force: true });
            //         }
            //       }
            //     });

            //   cy.visit("https://career.lifology.com/dashboard/level/4/");
            //   cy.wait(2000);

            //   Cypress.on("uncaught:exception", (err, runnable) => {
            //     // returning false here prevents Cypress from
            //     // failing the test
            //     return false;
            //   });
            // }

            if (innerboxCount === 2) {
              cy.log("innerboxCount", innerboxCount);
              cy.wait(1500);
              cy.get("[class='swiper-slide swiper-slide-active']").click();
              cy.get(
                "input[class='block w-full text-center uppercase border-gray-300 rounded-md shadow-sm focus:border-buddyDark focus:ring-buddyDark sm:text-sm']"
              ).type("LIFO24718");
              cy.get("button[id='btnSearch']")
                .should("have.text", "Go")
                .click();
              cy.wait(5000);
              cy.get(
                "a[class='px-4 py-3 text-white rounded-full shadow-xl animate-bounce bg-buddyDark hover:bg-buddyLight']"
              )
                .should("have.text", "Continue Your Journey")
                .click();
            }
          }
        }
      }
    });
  });

  return;
});
