package mainPage

import (
	"net/http"

	"github.com/a-berahman/batamrin/common"
	"github.com/a-berahman/batamrin/config"
)

func Index(w http.ResponseWriter, req *http.Request) {
	if req.Method != "GET" {
		http.Error(w, http.StatusText(405), http.StatusMethodNotAllowed)
	}
	config.TPL.ExecuteTemplate(w, common.Index, nil)
}
