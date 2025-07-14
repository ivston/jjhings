import React from "react";

const FlavourGraveyardPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center gap-10 min-h-screen font-gabarito px-4">
      <div className="flex flex-col gap-10 max-w-3xl">
        <h1 className="text-8xl text-center">🪦🍦🧟‍♂️</h1>
        <p className="text-3xl text-amber-700">
          Our flavors always change, and we use seasonal ingredients — so come
          ready to try something new every time!
        </p>
        <p className="text-3xl text-amber-700">
          To give you a taste of what to expect, here are some JJ Hings
          favorites from the past — some might return, some might never come
          back! 😝
        </p>
      </div>
      <section className="py-20 px-4 max-w-4xl mx-auto font-gabarito text-pink-300">
        {/* --- Category: Soft Serve --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-amber-700">
            🍦 Soft Serve
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Capitaine Crunch</h3>
              <p className="text-lg text-amber-700">
                Creamy sweet corn soft serve topped with salted caramel and
                pretzels
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Fraise Lèche</h3>
              <p className="text-lg text-amber-700">
                Local strawberries, local fresh milk
              </p>
            </div>
          </div>
        </div>

        {/* --- Category: Scoops --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-amber-700">
            🍨 Scoops
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Athé Pet Natty</h3>
              <p className="text-lg text-amber-700">
                Apricot and pet’ nat’ sorbet with a touch of honey
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Pavlover</h3>
              <p className="text-lg text-amber-700">
                Vanilla base, strawbery-rhubarb compote, meringue
              </p>
            </div>
          </div>
        </div>

        {/* --- Category: Ice Cream Sandwiches --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-amber-700">
            🍪 Ice Cream Sandwiches
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Peanut Buddy and JJ</h3>
              <p className="text-lg text-amber-700">
                Peanut butter ice cream and strawberry rhubarb jam sandwiched
                between two peanut cookies, dipped in dark choc and peanut
                crunch
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Cookies 'n' Cream</h3>
              <p className="text-lg text-amber-700">
                Vanilla ice cream with chocolate chips between two chocolate
                bisuits dipped in dark choc
              </p>
            </div>
          </div>
        </div>

        {/* --- Category: Ice Pops --- */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-amber-700">
            🍡 Ice Pops
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Fraisenade</h3>
              <p className="text-lg text-amber-700">
                Fresh strawberry purée and lemon juice
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Peach Tea</h3>
              <p className="text-lg text-amber-700">
                Steeped Earl Grey tea with juicy local peaches
              </p>
            </div>
          </div>
        </div>

        {/* --- Specials Note --- */}
        <p className="text-xl text-center mt-16">
          ✨ You can also expect rotating specials like homemade pies, donuts,
          sodas and ice cream floats — always made with fresh ingredients and
          lots of love.
        </p>
      </section>
    </main>
  );
};

export default FlavourGraveyardPage;
