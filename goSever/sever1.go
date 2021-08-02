package main
import ("io" 
	"net/http" 
	"encoding/json"
)
type Car struct{
	Id string
	Name string
	Age int
}
func CarsServer(writer http.ResponseWriter,request *http.Request){
	cars := []Car{
		Car{Id: "1", Name: "car1", Age: 18},
		Car{Id: "2", Name: "car2", Age: 20},
		Car{Id: "3", Name: "car3", Age: 30},
	}
	cars_json,_ := json.Marshal(cars)
	io.WriteString(writer,string(cars_json))

}
func main(){
	http.HandleFunc("/cars",CarsServer)
	http.ListenAndServe(":5001",nil)
}