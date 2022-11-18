package devchalenge.blog.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import devchalenge.blog.entities.Post;

public interface PostRepository extends JpaRepository<Post, UUID> {

}
