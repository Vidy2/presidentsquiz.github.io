/*
 * Decompiled with CFR 0.152.
 */
import java.util.ArrayList;
import java.util.Scanner;

public class App {
    boolean wash = false;
    boolean adams = false;
    boolean jefferson = false;
    boolean madison = false;
    boolean monroe = false;
    boolean jq_adams = false;
    boolean jackson = false;
    boolean buren = false;
    boolean w_h_harrison = false;
    boolean tyler = false;
    boolean polk = false;
    boolean taylor = false;
    boolean fillmore = false;
    boolean pierce = false;
    boolean buchanan = false;
    boolean lincoln = false;
    boolean johnson = false;
    boolean grant = false;
    boolean hayes = false;
    boolean garfield = false;
    boolean arthur = false;
    boolean cleveland = false;
    boolean b_harrison = false;
    boolean mckinley = false;
    boolean t_roosevelt = false;
    boolean taft = false;
    boolean wilson = false;
    boolean harding = false;
    boolean coolidge = false;
    boolean hoover = false;
    boolean fdr = false;
    boolean truman = false;
    boolean eisenhower = false;
    boolean kennedy = false;
    boolean lbj = false;
    boolean nixon = false;
    boolean ford = false;
    boolean carter = false;
    boolean reagan = false;
    boolean h_w_bush = false;
    boolean clinton = false;
    boolean w_bush = false;
    boolean obama = false;
    boolean trump = false;
    boolean biden = false;
    ArrayList<String> wrongGuesses = new ArrayList();

    public static void main(String[] args) {
        App program = new App();
        program.run();
    }

    public void run() {
        Scanner input = new Scanner(System.in);
        long start = System.nanoTime();
        while (true) {
            App.clearConsole();
            this.displayPresidentsInTwoColumns();
            this.displayWrongGuesses();
            System.out.print("\n\nName a president (Type exit to quit): ");
            String answer = input.nextLine();
            if (answer.toLowerCase().contains("exit") || answer.toLowerCase().contains("quit")) break;
            boolean matched = this.processAnswer(answer.toLowerCase());
            if (matched || this.wrongGuesses.contains(answer)) continue;
            this.wrongGuesses.add(answer);
        }
    }

    private void displayPresidentsInTwoColumns() {
        PresidentEntry[] entries = new PresidentEntry[]{new PresidentEntry("1789-1793", "George Washington", this.wash), new PresidentEntry("1793-1797", "George Washington", this.wash), new PresidentEntry("1797-1801", "John Adams", this.adams), new PresidentEntry("1801-1805", "Thomas Jefferson", this.jefferson), new PresidentEntry("1805-1809", "Thomas Jefferson", this.jefferson), new PresidentEntry("1809-1813", "James Madison", this.madison), new PresidentEntry("1813-1817", "James Madison", this.madison), new PresidentEntry("1817-1821", "James Monroe", this.monroe), new PresidentEntry("1821-1825", "James Monroe", this.monroe), new PresidentEntry("1825-1829", "John Quincy Adams", this.jq_adams), new PresidentEntry("1829-1833", "Andrew Jackson", this.jackson), new PresidentEntry("1833-1837", "Andrew Jackson", this.jackson), new PresidentEntry("1837-1841", "Martin Van Buren", this.buren), new PresidentEntry("1841", "William Henry Harrison", this.w_h_harrison), new PresidentEntry("1841-1845", "John Tyler", this.tyler), new PresidentEntry("1845-1849", "James Polk", this.polk), new PresidentEntry("1849-1850", "Zachary Taylor", this.taylor), new PresidentEntry("1850-1853", "Millard Fillmore", this.fillmore), new PresidentEntry("1853-1857", "Franklin Pierce", this.pierce), new PresidentEntry("1857-1861", "James Buchanan", this.buchanan), new PresidentEntry("1861-1865", "Abraham Lincoln", this.lincoln), new PresidentEntry("1865-1869", "Andrew Johnson", this.johnson), new PresidentEntry("1869-1873", "Ulysses S. Grant", this.grant), new PresidentEntry("1873-1877", "Ulysses S. Grant", this.grant), new PresidentEntry("1877-1881", "Rutherford B. Hayes", this.hayes), new PresidentEntry("1881", "James Garfield", this.garfield), new PresidentEntry("1881-1885", "Chester A. Arthur", this.arthur), new PresidentEntry("1885-1889", "Grover Cleveland", this.cleveland), new PresidentEntry("1889-1893", "Benjamin Harrison", this.b_harrison), new PresidentEntry("1893-1897", "Grover Cleveland", this.cleveland), new PresidentEntry("1897-1901", "William McKinley", this.mckinley), new PresidentEntry("1901-1905", "Theodore Roosevelt", this.t_roosevelt), new PresidentEntry("1905-1909", "Theodore Roosevelt", this.t_roosevelt), new PresidentEntry("1909-1913", "William Taft", this.taft), new PresidentEntry("1913-1917", "Woodrow Wilson", this.wilson), new PresidentEntry("1917-1921", "Woodrow Wilson", this.wilson), new PresidentEntry("1921-1923", "Warren G. Harding", this.harding), new PresidentEntry("1923-1925", "Calvin Coolidge", this.coolidge), new PresidentEntry("1925-1929", "Calvin Coolidge", this.coolidge), new PresidentEntry("1929-1933", "Herbert Hoover", this.hoover), new PresidentEntry("1933-1937", "Franklin Roosevelt", this.fdr), new PresidentEntry("1937-1941", "Franklin Roosevelt", this.fdr), new PresidentEntry("1941-1945", "Franklin Roosevelt", this.fdr), new PresidentEntry("1945-1949", "Harry Truman", this.truman), new PresidentEntry("1949-1953", "Harry Truman", this.truman), new PresidentEntry("1953-1957", "Dwight Eisenhower", this.eisenhower), new PresidentEntry("1957-1961", "Dwight Eisenhower", this.eisenhower), new PresidentEntry("1961-1963", "John F. Kennedy", this.kennedy), new PresidentEntry("1963-1965", "Lyndon B. Johnson", this.lbj), new PresidentEntry("1965-1969", "Lyndon B. Johnson", this.lbj), new PresidentEntry("1969-1973", "Richard Nixon", this.nixon), new PresidentEntry("1973-1974", "Richard Nixon", this.nixon), new PresidentEntry("1974-1977", "Gerald Ford", this.ford), new PresidentEntry("1977-1981", "Jimmy Carter", this.carter), new PresidentEntry("1981-1985", "Ronald Reagan", this.reagan), new PresidentEntry("1985-1989", "Ronald Reagan", this.reagan), new PresidentEntry("1989-1993", "George H.W. Bush", this.h_w_bush), new PresidentEntry("1993-1997", "Bill Clinton", this.clinton), new PresidentEntry("1997-2001", "Bill Clinton", this.clinton), new PresidentEntry("2001-2005", "George W. Bush", this.w_bush), new PresidentEntry("2005-2009", "George W. Bush", this.w_bush), new PresidentEntry("2009-2013", "Barack Obama", this.obama), new PresidentEntry("2013-2017", "Barack Obama", this.obama), new PresidentEntry("2017-2021", "Donald Trump", this.trump), new PresidentEntry("2021-2025", "Joe Biden", this.biden), new PresidentEntry("2025-Present", "Donald Trump", this.trump)};
        int totalEntries = entries.length;
        int halfWay = (int)Math.ceil((double)totalEntries / 2.0);
        int yearWidth = 12;
        int nameWidth = 25;
        String[][] displayGrid = new String[halfWay][4];
        int i = 0;
        while (i < halfWay) {
            PresidentEntry entry1 = entries[i];
            displayGrid[i][0] = entry1.years + ":";
            displayGrid[i][1] = entry1.guessed ? entry1.name : "";
            int rightIndex = i + halfWay;
            if (rightIndex < totalEntries) {
                PresidentEntry entry2 = entries[rightIndex];
                displayGrid[i][2] = entry2.years + ":";
                displayGrid[i][3] = entry2.guessed ? entry2.name : "";
            } else {
                displayGrid[i][2] = "";
                displayGrid[i][3] = "";
            }
            ++i;
        }
        i = 0;
        while (i < halfWay) {
            System.out.printf("%-" + yearWidth + "s %-" + nameWidth + "s%-" + yearWidth + "s %-" + nameWidth + "s%n", displayGrid[i][0], displayGrid[i][1], displayGrid[i][2], displayGrid[i][3]);
            ++i;
        }
    }

    private boolean processAnswer(String answer) {
        if (answer.contains("washington")) {
            this.wash = true;
        } else if (answer.contains("adams")) {
            this.adams = true;
            this.jq_adams = true;
        } else if (answer.contains("jefferson")) {
            this.jefferson = true;
        } else if (answer.contains("madison")) {
            this.madison = true;
        } else if (answer.contains("monroe")) {
            this.monroe = true;
        } else if (answer.contains("jackson")) {
            this.jackson = true;
        } else if (answer.contains("buren") || answer.contains("van buren")) {
            this.buren = true;
        } else if (answer.contains("william henry harrison")) {
            this.w_h_harrison = true;
        } else if (answer.contains("benjamin harrison")) {
            this.b_harrison = true;
        } else if (answer.contains("harrison")) {
            this.w_h_harrison = true;
            this.b_harrison = true;
        } else if (answer.contains("tyler") || answer.contains("accidency")) {
            this.tyler = true;
        } else if (answer.contains("polk")) {
            this.polk = true;
        } else if (answer.contains("taylor")) {
            this.taylor = true;
        } else if (answer.contains("fillmore")) {
            this.fillmore = true;
        } else if (answer.contains("pierce")) {
            this.pierce = true;
        } else if (answer.contains("buchanan")) {
            this.buchanan = true;
        } else if (answer.contains("lincoln")) {
            this.lincoln = true;
        } else if (answer.contains("andrew johnson")) {
            this.johnson = true;
        } else if (answer.contains("lyndon johnson") || answer.contains("lbj")) {
            this.lbj = true;
        } else if (answer.contains("johnson")) {
            this.johnson = true;
            this.lbj = true;
        } else if (answer.contains("grant")) {
            this.grant = true;
        } else if (answer.contains("hayes")) {
            this.hayes = true;
        } else if (answer.contains("garfield")) {
            this.garfield = true;
        } else if (answer.contains("arthur")) {
            this.arthur = true;
        } else if (answer.contains("cleveland")) {
            this.cleveland = true;
        } else if (answer.contains("mckinley")) {
            this.mckinley = true;
        } else if (answer.contains("theodore roosevelt") || answer.contains("teddy roosevelt")) {
            this.t_roosevelt = true;
        } else if (answer.contains("franklin roosevelt") || answer.contains("fdr")) {
            this.fdr = true;
        } else if (answer.contains("roosevelt")) {
            this.t_roosevelt = true;
            this.fdr = true;
        } else if (answer.contains("taft")) {
            this.taft = true;
        } else if (answer.contains("wilson")) {
            this.wilson = true;
        } else if (answer.contains("harding")) {
            this.harding = true;
        } else if (answer.contains("coolidge")) {
            this.coolidge = true;
        } else if (answer.contains("hoover")) {
            this.hoover = true;
        } else if (answer.contains("truman")) {
            this.truman = true;
        } else if (answer.contains("eisenhower")) {
            this.eisenhower = true;
        } else if (answer.contains("kennedy") || answer.contains("jfk")) {
            this.kennedy = true;
        } else if (answer.contains("nixon")) {
            this.nixon = true;
        } else if (answer.contains("ford")) {
            this.ford = true;
        } else if (answer.contains("carter")) {
            this.carter = true;
        } else if (answer.contains("reagan")) {
            this.reagan = true;
        } else if (answer.contains("george h w bush") || answer.contains("h w bush")) {
            this.h_w_bush = true;
        } else if (answer.contains("george w bush") || answer.contains("w bush")) {
            this.w_bush = true;
        } else if (answer.contains("bush")) {
            this.h_w_bush = true;
            this.w_bush = true;
        } else if (answer.contains("clinton")) {
            this.clinton = true;
        } else if (answer.contains("obama")) {
            this.obama = true;
        } else if (answer.contains("trump")) {
            this.trump = true;
        } else if (answer.contains("biden")) {
            this.biden = true;
        } else {
            return false;
        }
        return true;
    }

    private void displayWrongGuesses() {
        if (this.wrongGuesses.isEmpty()) {
            return;
        }
        System.out.print("Wrong guesses: ");
        int i = 0;
        while (i < this.wrongGuesses.size()) {
            System.out.print(this.wrongGuesses.get(i));
            if (i < this.wrongGuesses.size() - 1) {
                System.out.print(", ");
            }
            ++i;
        }
        System.out.println();
    }

    public static void clearConsole() {
        System.out.print("\u001b[H\u001b[2J\u001b[3J");
        System.out.flush();
    }

    public static void sleep(int time) {
        try {
            Thread.sleep(time);
        }
        catch (InterruptedException interruptedException) {
            // empty catch block
        }
    }

    private class PresidentEntry {
        String years;
        String name;
        boolean guessed;

        PresidentEntry(String years, String name, boolean guessed) {
            this.years = years;
            this.name = name;
            this.guessed = guessed;
        }
    }
}
