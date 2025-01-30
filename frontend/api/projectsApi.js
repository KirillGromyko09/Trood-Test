
export const getProjects = async () => {
  try {
    const response = await fetch("http://localhost:8080/projects");
    if (!response.ok) {
      throw new Error("Error fetching projects");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to get projects", error);
    return [];
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await fetch("http://localhost:8080/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      // Логируем ошибку, если запрос не успешен
      const errorData = await response.json();
      console.error("Manufacturer error when creating a project:", errorData);
      throw new Error(`Failed to create project: ${errorData.message || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating project", error);
    throw error;
  }
};
