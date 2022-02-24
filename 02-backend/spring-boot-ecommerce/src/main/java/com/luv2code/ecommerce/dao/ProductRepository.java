package com.luv2code.ecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.luv2code.ecommerce.entity.Product;

//@CrossOrigin("http://localhost:4200")
@RepositoryRestResource // for the MyAppConfig so we no longer need the @CrossOrigin above
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	// Find by category id 
	// http://localhost:9090/api/products/search/findByCategoryId?id=2
	Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
	
	// Find by name
	// http://localhost:9090/api/products/search/findByNameContaining?name=Python
	Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
}
