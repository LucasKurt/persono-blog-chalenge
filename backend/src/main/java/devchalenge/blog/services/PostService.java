package devchalenge.blog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import devchalenge.blog.entities.Post;
import devchalenge.blog.entities.dtos.PostDTO;
import devchalenge.blog.repositories.PostRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository repository;
	
	@Transactional(readOnly = true)
	public List<PostDTO> findAll() {
		List<Post> list = repository.findAll();
		
		return list.stream().map(entity -> new PostDTO(entity)).toList();
	}
}
