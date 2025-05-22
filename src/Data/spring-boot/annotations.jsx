
    export const annotations =[
    
    {
    "title":"@Controller",
    "description": "Here we write out actual API. API request coming from outside your application will land in this class"
    },
    {
    "title":"@RestController",
    "description": "If API is not returning any view then instead of controller we can use Restcontroller. It removes the overhead of add @ResponseBody to every controller function. @RestController = @controller + @ResponseBody"
    },
    {
    "title":"@ResponseBody",
    "description": "This annotation is applied to a method which ensures that response of the API is not a view."
    },
    {
    "title":"@RequestParam",
    "description": "This is added to function parameter which is used to fetch query parameter from url",
    "synatax":"// url = (localhost:8080/getbookbyId?book_id = 1)n@GetMapping(path = '/getbookbyId')npublic String getBookById(@RequestParam(name='book_id') Integer bookId)"
    },
    {
    "title":"@PathVariable",
    "description": "This is added to function parameter which is used to fetch path variable from url",
    "synatax":"// url = (localhost:8080/getbookbyId/12)n@GetMapping('/getbookbyId/{book_id}')npublic String getBookById(@PathVariable(name='book_id') Integer bookId)"
    },
    {
    "title":"@RequestBody",
    "description": "This is added to function parameter which is used to fetch the body/data",
    "synatax":"// url = (localhost:8080/getbookbyId/12)n@PostMapping('/addbook')npublic String getBookById(@PathVariable(name='book_id') Integer bookId)"
    },
    {
    "title":"@RequestMapping",
    "description": "This is added to function parameter which ",
    "synatax":"// url = (localhost:8080/getbookbyId/12)n@PostMapping('/addbook')npublic String getBookById(@PathVariable(name='book_id') Integer bookId)"
    },
    {
    "title":"@Componet",
    "description": "This is used to inform spring framework to manage class life-cycle. when we run or application, it will do class path scanning for all the class created in the project and will check which class has annotation <b>component<b> it will load it into the memory. ",
    "synatax":""
    },
    {
    "title":"@Service",
    "description": "This is for specialization of componet which means some business logic exists in this class",
    "synatax":""
    },
    {
    "title":"@Repository",
    "description": "This means the the class is going to do database intraction",
    "synatax":""
    },
    {
    "title":"@Autowired",
    "description": "This is used to inject object automatically, which help to make application loosely coupled",
    "synatax":""
    },
    {
        "title":"@Configuration",
        "description": "When inside a class we want to create a custom bean we have to annotate class with configuration",
        "synatax":""
        },
    ]