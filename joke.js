public class Main
{
	public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Do you think archbishop Charles Agyin Asare will go to nogokpo? yes or no?");
		String userInput= scanner.nextLine();
		if(userInput.equals("yes")) {
		System.out.println("Peace is going to reign but others might think different");
		}
		else if(userInput.equals("no")) {
		   	System.out.println("then we are going to see power vrs power in this country"); 
		}
		 else {
            System.out.println("Invalid input. Please select either 'yes' or 'no'.");
        
		}
	}
}
