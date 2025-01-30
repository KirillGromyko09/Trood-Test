package handlers

import (
	"log"
	"net/http"
	"sync"
	"github.com/google/uuid"

	"github.com/gin-gonic/gin"
	"github.com/troodinc/trood-front-hackathon/models"
)

var (
	projects     = make(map[string]models.Project) // change on string for UUID
	projectMutex  sync.Mutex
)

func InitProjects() {
	projectMutex.Lock()
	defer projectMutex.Unlock()

	projects["e8c67f1f-d383-4c84-b8d4-d4f0327720fa"] = models.Project{
		ID:          "e8c67f1f-d383-4c84-b8d4-d4f0327720fa",
		Field:       "",
		Name:        "Project Alpha",
		Description: "A cutting-edge AI project",
		Deadline:    "31.12.2025",
		Experience:  "5+ years",
	}

	log.Println("Initialized projects with sample data")
}

// GetProjectByID godoc
// @Summary Get a project by ID
// @Description Retrieve a project from the database by its ID
// @Tags Projects
// @Accept  json
// @Produce  json
// @Param id path int true "Project ID"
// @Success 200 {object} models.Project
// @Failure 404 {object} map[string]interface{} "Project not found"
// @Router /projects/{id} [get]
func GetProjectByID(c *gin.Context) {
	id := c.Param("id") // Get the project ID as a string

	projectMutex.Lock()
	defer projectMutex.Unlock()

	if project, exists := projects[id]; exists {
		c.JSON(http.StatusOK, project)
	} else {
		c.JSON(http.StatusNotFound, map[string]interface{}{"error": "Project not found"})
	}
}

// GetProjects godoc
// @Summary Get all projects
// @Description Retrieve all projects from the database
// @Tags Projects
// @Accept  json
// @Produce  json
// @Success 200 {array} models.Project
// @Router /projects [get]
func GetProjects(c *gin.Context) {
	projectMutex.Lock()
	defer projectMutex.Unlock()

	var projectList []models.Project
	for _, project := range projects {
		projectList = append(projectList, project)
	}

	if len(projectList) == 0 {
		c.JSON(http.StatusOK, []models.Project{})
		return
	}

	c.JSON(http.StatusOK, projectList)
}

// CreateProject godoc
// @Summary Create a new project
// @Description Create a new project by providing the project details
// @Tags Projects
// @Accept  json
// @Produce  json
// @Param project body models.Project true "Project data"
// @Success 201 {object} models.Project
// @Router /projects [post]
func CreateProject(c *gin.Context) {
	var project models.Project
	if err := c.ShouldBindJSON(&project); err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{"error": "Invalid input"})
		return
	}
    project.FormatDeadline()

  // Generate a new UUID for the project
  	project.ID = uuid.New().String()

	projectMutex.Lock()
	defer projectMutex.Unlock()


	projects[project.ID] = project

	c.JSON(http.StatusCreated, project)
}

// EditProject godoc
// @Summary Edit an existing project
// @Description Edit a project by ID
// @Tags Projects
// @Accept  json
// @Produce  json
// @Param id path int true "Project ID"
// @Param project body models.Project true "Updated project data"
// @Success 200 {object} models.Project
// @Failure 404 {object} map[string]interface{} "Project not found"
// @Router /projects/{id} [put]
func EditProject(c *gin.Context) {
	id := c.Param("id")


	var project models.Project
	if err := c.ShouldBindJSON(&project); err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{"error": "Invalid input"})
		return
	}

	projectMutex.Lock()
	defer projectMutex.Unlock()

	if existingProject, exists := projects[id]; exists {
		existingProject.Name = project.Name
		existingProject.Description = project.Description
		existingProject.Deadline = project.Deadline
		existingProject.DeadlineTimeStamp = project.DeadlineTimeStamp
		existingProject.Experience = project.Experience
		existingProject.Field = project.Field
		projects[id] = existingProject

		c.JSON(http.StatusOK, existingProject)
	} else {
		c.JSON(http.StatusNotFound, map[string]interface{}{"error": "Project not found"})
	}
}

// DeleteProject godoc
// @Summary Delete an existing project
// @Description Delete a project by ID
// @Tags Projects
// @Accept  json
// @Produce  json
// @Param id path int true "Project ID"
// @Success 204 {object} map[string]interface{} "No Content"
// @Failure 404 {object} map[string]interface{} "Project not found"
// @Router /projects/{id} [delete]
func DeleteProject(c *gin.Context) {
	id := c.Param("id")


	projectMutex.Lock()
	defer projectMutex.Unlock()

	if _, exists := projects[id]; exists {
		// Delete the project
		delete(projects, id)

		c.JSON(http.StatusNoContent, map[string]interface{}{"message": "Project deleted"})
	} else {
		c.JSON(http.StatusNotFound, map[string]interface{}{"error": "Project not found"})
	}
}
