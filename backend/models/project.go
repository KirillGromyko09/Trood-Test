package models

import (
	"time"
	"log"
)
type Project struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Field       string `json:"field"`
	Description string `json:"description"`
	Deadline    string `json:"deadline"`
	Experience  string `json:"experience"`
	DeadlineTimeStamp int64 `json:"deadlineTimeStamp"`
}
// Преобразование даты в формат yyyy-MM-dd
func (p *Project) FormatDeadline() {
	parsedDate, err := time.Parse("02.01.2006", p.Deadline)
	if err != nil {
		log.Println("Error parsing deadline date:", err)
		return
	}

	// Форматируем в yyyy-MM-dd
	p.Deadline = parsedDate.Format("2006-01-02")
}
