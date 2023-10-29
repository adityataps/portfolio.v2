package graph

import (
	"fmt"
	"os"

	"github.com/go-pg/pg"
)

const (
	host = "localhost"
	port = 5432
)

func Connect() *pg.DB {
	username := os.Getenv("POSTGRES_USERNAME")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbname := os.Getenv("POSTGRES_DB")

	connStr := fmt.Sprintf("postgres://%s:%s@%s:%d/%s?sslmode=disable",
		username, password, host, port, dbname)

	fmt.Println(connStr)

	opt, err := pg.ParseURL(connStr)
	if err != nil {
		panic(err)
	}

	db := pg.Connect(opt)
	if _, DBStatus := db.Exec("SELECT 1"); DBStatus != nil {
		panic(DBStatus)
	}
	return db
}
