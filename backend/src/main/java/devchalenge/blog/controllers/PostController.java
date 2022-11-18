package devchalenge.blog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import devchalenge.blog.entities.dtos.PostDTO;
import devchalenge.blog.services.PostService;

@RestController
@RequestMapping("/posts")
public class PostController {

	@Autowired
	private PostService service;
	
	@GetMapping
	public ResponseEntity<List<PostDTO>> findAll() {
		return ResponseEntity.ok().body(service.findAll());
	}
}
