 const person = {
            vorname: 'Max',
            nachname: 'Grötsch',
            greet: function () {
                console.log("Hallo mein Name ist " + this.vorname + " " + this.nachname)
            },
            // Ich hätte auch hier mit < function() {...} > arbeiten können, dann darf ich auch this.vorname benutzen
            writeToScreen: () => {
                //Achtung bei dieser Art und Weise Text im Html erscheinen zu lassen!
                //Immer auf den Rückgabetyp des Selectors achten, manche geben HTML-Collections etc. zurück
                //Geg: Aus Collection auswählen (mit  []) und casten
                let node = document.querySelector('body');
                let newNode = document.createElement('p');
                newNode.appendChild(document.createTextNode("Hallo mein Name ist " + person.vorname + " " + person.nachname));
                node.appendChild(newNode);
            },
            //In JS dürfen Variablen mit [a-z, A-Z], [_] oder [$] beginnen
            //Die darauffolgenden Zeichen dürfen auch nur aus diesen Set an Zeichen stammen
            //Deshalb ist die unten benutzte Benennnung für die Funktion KEIN gültiger Variablenname
            'call-Me-Maybe': function () {
                console.log("Genau! Aufruf muss über eckige Klammern erfolgen ;)")
            }
        }
        person.greet()
        person.writeToScreen()
        console.log(typeof (person['call-Me-Maybe']))
        person['call-Me-Maybe']()
        //####################################################################################################################
        //Wrapper-Objekte und das Prüfen auf Identität
        let aNumberObject = new Number(42);
        let anotherNumberOject = new Number(3.1415);
        let aStringObject = new String('Hallo');
        let aBoolObjetct = new Boolean(true);

        let aNumber = 42;
        let anoterNumber = 3.1415;
        let aString = 'Hallo';
        let aBool = true;

        console.log(typeof (aNumber));
        console.log(typeof (aNumberObject));
        //Ist true und damit auf der Konsole zu sehen
        //JS macht hier automatische Typkonvertierung und checkt das man den Inahlt vergleichen möchten
        if (aNumberObject == aNumber) console.log("Ja die beiden Zahlen sind gleich...aber");
        //Hier muss nicht nur der Inhalt sondern auch der Datentyp stimmen und deshalb auch nicht auf der Konsole zu lesen
        if (aNumberObject === aNumber) console.log("Sie sind von einem unterschiedlichen Datentyp")

        //#####################################################################################################################
        //Arrays => sind Objekte
        const arr1 = new Array();
        arr1[0] = 'Test1';
        arr1[1] = 'Test2'
        arr1[2] = 'Test3'

        const arr2 = [
            'Test4',
            'Test5',
            'Test6'
        ]

        //OBACHT!
        const arr3 = new Array(10) // interpretiert die 10 als Länge und belegt die default-Werte mit undefined
        const arr4 = new Array(10, 11)// erzeugt einen Array der Länge 2 mit den Werten 10 und 11
        // Beachte es gibt jede Menge nützlicher Array Funktionen die entweder schon auf dem Cheat-Sheet oder im Buch auf Seite 48 zu finden sind. Wichtg finde ich:
        /*
         * - concat()
         * - forEach() ----
         * - filter()      | diese 3 werden mit Lambda Ausdrücken gesteuert
         * - map()     ----
         * - join() [Wandelt Array in Zeichenkette um]
         * - push(), pop()
         */

        //#####################################################################################################################
        //Regex (nur das wichtigste, falls er [most likely] ein Arsch ist)
        const checkHttp = /http/;
        console.log(checkHttp.test("http://www.google.de")) //so kann man Regex testen. Hier gibt die Methode test() -> true zurück
        console.log(checkHttp.exec("http://www.google.de")) // so kann mein einzelne Teile des Strings ermitteln -> es wird ein Array zurückgegeben
        // Weitere wichte Methode in Zusamenhang mit Regex:
        /*
         * - replace()
         * - search()
         * - split()
         * - match()
         * Machen alles genau das was sie versprechen ;)
         */
        //#####################################################################################################################
        //Funktionen Basics
        /* Funktionen können folgendermaßen erstellt werden:
            1) function statement
            2) function expression
            3) Konstruktor des Function-Objects
            4) Als Arrow-Function (Lambda-Expression)
        */

        // 1 - Funktionsanweisung
        function add(num1, num2) {
            return num1 + num2;
        }

        //Um nur Zahlen zur Addition zuzulassen muss ich diese in der Funktion abfangen
        function add4real(num1, num2) {
            if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
                throw new TypeError('Parameter müssen Zahlen sein!');
            }
            return num1 + num2;
        }

        console.log(add("Abra ", "Kadabra"))
        //console.log(add4real("Abra ", "Kadabra")) //throws Exception
        console.log(add4real(2, 2))

        // 2 - Funktionsausdruck
        const add2 = function addFoo(num1, num2) {
            return num1 + num2;
        };
        // den namen (addFoo) kann man weglasse und erhält so eine anonyme Funktion

        // 3 - Konstruktorfunktion (Richtig scheiße, besser nicht verwenden[Funktionskörper wird erst geparst, wenn der Function-Konstruktor innerhalb des Programms aufgerufen wird])
        const addKonstuktor = new Function(
            'num1',
            'num2',
            'return num1 + num2'
        );
        console.log(addKonstuktor(2, 6));

        // 4 - Arrow-Funktion
        let addArrow = (x, y) => { return x + y };
        let result = addArrow(8, 8);
        console.log(result);

        // Dynamische Anzahl von Funktionsparametern
        // Option 1: arguments-Objekt
        function addAll() {
            let result = 0;
            for (let i = 0; i < arguments.length; i++) {
                result += arguments[i];
            }
            return result;
        }
        console.log(addAll(2, 4, 6, 8, 10))
        /* Erklärung
        Jedes Mal, wenn eine Funktion aufgerufen wird, steht innerhalb der Funktion implizit ein Objekt mit dem Namen arguments zur Verfügung, das die Funktionsargumente
        bzw. Funktionsparameter enthält, die beim Funktionsaufruf übergeben wurden.#
        Diese Objekt ist array-ähnlich, in dem Sinne das es eine length() eigenschaft besitzt und mit der Array-Syntax der []-Klammern darauf zugegriffen werden kann.
        Allerdings besitzt es keine Arraymethoden wie map(), concat(), splic() o.Ä.
        */

        // Option 2: Rest-Parameter (änlich wi Varags in Java)
        function addAllNew(...nums) {
            let result = 0;
            for (let i = 0; i > nums.length; i++) {
                result += nums[i];
            }
            return result;
        }

        //#####################################################################################################################
        // Operatoren (Auswhal die ich interresant finde)
        // ** = Potenzierung
        // delete =  Erlaubt das Löschen von Elementen in einem Array, das Löschen von Objekten sowie das Löschen von Objekteigenschaften.
        // <eigenschaft> in <objekt> = Überprüft, ob eine Eigenschaft in einem Objekt vorhanden ist.
        // <objekt> instanceof <typ> = binärer Operator, der überprüft, ob ein Objekt von einem bestimmten Typ oder Instanz einer Klasse ist
        // typeof <operand> = Ermittelt den Datentyp des Operanden. Der Operand kann dabei ein Objekt, ein String, eine Variable oder ein Schlüsselwort wie true oder false sein. Optional kann der Operand in Klammern angegeben werden.
        //#####################################################################################################################

        //#####################################################################################################################
        //Kontrollstrukturen und Schleifen
        /*
        Im Gegensatz zu beispielsweise Java lassen sich in JavaScript innerhalb der if-Klausel
        nicht nur boolesche Werte, sondern Werte beliebigen Typs verwenden. Erinnern Sie
        sich: Jeder Wert in JavaScript evaluiert innerhalb boolescher Bedingungen entweder
        zu true oder false. Insbesondere die Tatsache, dass undefined und null zu false eva-
        luieren, ist in der Praxis sehr bequem.
        */
        //#####################################################################################################################

        //Basic-Loops
        let i = 10;
        while (i > 0) {
            console.log(i);
            i--;
        }

        do {
            console.log(i);
            i--;
        } while (i > 0);

        for (let i = 10; i > 0; i--) {
            console.log(i);
        }
