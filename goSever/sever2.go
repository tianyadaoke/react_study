package main
import ("io" 
	"net/http" 
	"encoding/json"
)
type Student struct{
	Id string
	Name string
	Age int
}
func StudentsServer(writer http.ResponseWriter,request *http.Request){
	students := []Student{
		Student{Id: "1", Name: "stu1", Age: 18},
		Student{Id: "2", Name: "stu2", Age: 20},
		Student{Id: "3", Name: "stu3", Age: 30},
	}
	students_json,_ := json.Marshal(students)
	io.WriteString(writer,string(students_json))

}
func main(){
	http.HandleFunc("/students",StudentsServer)
	http.ListenAndServe(":5000",nil)
}
