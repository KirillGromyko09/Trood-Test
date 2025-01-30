package models

type Vacancy struct {
	ID          string    `json:"id"`
	ProjectID   string    `json:"project_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Field       string `json:"field"`
	Country     string `json:"country"`
	Experience  string `json:"experience"`
}
