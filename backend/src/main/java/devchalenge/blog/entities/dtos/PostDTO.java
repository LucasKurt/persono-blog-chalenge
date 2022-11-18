package devchalenge.blog.entities.dtos;

import java.time.Instant;
import java.util.UUID;

import devchalenge.blog.entities.Post;

public class PostDTO {

	private UUID id;
	private String title;
	private String author;
	private String body;
	private String category;
	private Instant createdAt;
	private Instant updatedAt;
	
	public PostDTO() {
	}
	
	public PostDTO(UUID id, String title, String author, String body, String category, Instant createdAt,
			Instant updatedAt) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.body = body;
		this.category = category;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public PostDTO(Post post) {
		id = post.getId();
		title = post.getTitle();
		author = post.getAuthor();
		body = post.getBody();
		category = post.getCategory();
		createdAt = post.getCreatedAt();
		updatedAt = post.getUpdatedAt();
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public Instant getUpdatedAt() {
		return updatedAt;
	}
}
